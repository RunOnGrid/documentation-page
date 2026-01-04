#!/bin/bash

# Docker build script for Grid Documentation

set -e  # Exit on first error

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

IMAGE_NAME="gridcloud/documentation"
IMAGE_TAG="${IMAGE_TAG:-3.0}"
DOCKERFILE_PATH="${DOCKERFILE_PATH:-${SCRIPT_DIR}/Dockerfile}"
CONTEXT_DIR="${CONTEXT_DIR:-${PROJECT_ROOT}}"
PLATFORM="${PLATFORM:-linux/amd64}"

echo "Building Docker image: ${IMAGE_NAME}:${IMAGE_TAG}"
echo "Platform: ${PLATFORM}"
echo "Using Dockerfile: ${DOCKERFILE_PATH}"
echo "Build context: ${CONTEXT_DIR}"

# Optional: pass build args (e.g. NODE_ENV)
DOCKER_BUILD_ARGS=()

if [ -n "$NODE_ENV" ]; then
  DOCKER_BUILD_ARGS+=(--build-arg NODE_ENV="$NODE_ENV")
fi

# Example: pass NEXT_TELEMETRY_DISABLED to disable Next telemetry in build
DOCKER_BUILD_ARGS+=(--build-arg NEXT_TELEMETRY_DISABLED=1)

# Check if buildx is available, use it for better multi-platform support
if docker buildx version &> /dev/null; then
  echo "Using docker buildx for multi-platform build"
  # Ensure buildx builder exists
  docker buildx create --use --name multiplatform-builder 2>/dev/null || docker buildx use multiplatform-builder 2>/dev/null || true
  
  docker buildx build \
    --platform "${PLATFORM}" \
    --load \
    -f "${DOCKERFILE_PATH}" \
    -t "${IMAGE_NAME}:${IMAGE_TAG}" \
    "${DOCKER_BUILD_ARGS[@]}" \
    "${CONTEXT_DIR}"
else
  echo "Using standard docker build"
  docker build \
    --platform "${PLATFORM}" \
    -f "${DOCKERFILE_PATH}" \
    -t "${IMAGE_NAME}:${IMAGE_TAG}" \
    "${DOCKER_BUILD_ARGS[@]}" \
    "${CONTEXT_DIR}"
fi

echo "Docker image built successfully: ${IMAGE_NAME}:${IMAGE_TAG}"
echo "Platform ${PLATFORM}"
echo "Run with: docker run --rm -p 3000:3000 ${IMAGE_NAME}:${IMAGE_TAG}"

# Check if user is logged in to Docker Hub
if ! docker info | grep -q "Username"; then
    echo "⚠️  No estás logueado en Docker Hub"
    echo "Ejecutando: docker login"
    docker login
fi

# Push the image to Docker Hub
echo "Pushing Docker image to Docker Hub: ${IMAGE_NAME}:${IMAGE_TAG}"
docker push "${IMAGE_NAME}:${IMAGE_TAG}"

echo "✅ Image pushed successfully to Docker Hub"