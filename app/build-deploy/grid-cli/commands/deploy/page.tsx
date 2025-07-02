"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function DeployCommandPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Grid CLI: deploy</h1>

      <p className="text-gray-300 mb-8">
        The <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">deploy</code> command allows you to deploy
        applications to Grid directly from your local environment.
      </p>

      <div className="space-y-10">
        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                <code className="bg-[#121212] px-1 py-0.5 rounded text-sm">provider</code>
              </h3>
              <p className="text-gray-300">Specify the cloud provider (akash or flux).</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4 mt-2">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid deploy [provider]</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Basic deployment</h3>
              <p className="text-gray-300 mb-2">Deploy a specific directory to Grid:</p>
              <div className="bg-[#121212] border border-[#333] rounded-lg p-4">
                <pre className="text-gray-300 font-mono text-sm p-2">
                  <code>grid deploy flux "/Users/alice/dev/fluxconfig.json" </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Akash Deployment YAML Examples</h2>
          <p className="text-gray-300 mb-6">
            Below are examples of YAML configurations for deploying different types of containers on Akash. Click on
            each example to view the full configuration.
          </p>

          <div className="space-y-6">
            <YamlAccordion
              title="Public Docker Container"
              description="Deploy a public container from Docker Hub"
              yaml={`version: "2.0"
services:
  web:
    image: gridcloud/hello-app:2.0
    expose:
      - port: 8080
        as: 80
        to:
          - global: true
profiles:
  compute:
    web:
      resources:
        cpu:
          units: 1.0
        memory:
          size: 512Mi
        storage:
          size: 512Mi
  placement:
    dcloud:
      pricing:
        web:
          denom: uakt
          amount: 1000
deployment:
  web:
    dcloud:
      profile: web
      count: 1`}
            />

            <YamlAccordion
              title="Private Docker Container"
              description="Deploy a private container from Docker Hub with authentication"
              yaml={`version: "2.0"
services:
  service-1:
    image: ghcr.io/bob/testcontainer:latest
    credentials:
      host: docker.io
      username: bob
      password: bob123
    expose:
      - port: 8080
        as: 80
        to:
          - global: true
profiles:
  compute:
    service-1:
      resources:
        cpu:
          units: 0.1
        memory:
          size: 512Mi
        storage:
          - size: 1Gi
  placement:
    dcloud:
      pricing:
        service-1:
          denom: uakt
          amount: 10000
deployment:
  service-1:
    dcloud:
      profile: service-1
      count: 1`}
            />

            <YamlAccordion
              title="GitHub Container Registry"
              description="Deploy a container from GitHub Container Registry with authentication"
              yaml={`version: "2.0"
services:
  service-1:
    image: ghcr.io/alice/testcontainer:latest
    credentials:
      host: ghcr.io
      username: alice
      password: Grid_github_pat
    expose:
      - port: 8080
        as: 80
        to:
          - global: true
profiles:
  compute:
    service-1:
      resources:
        cpu:
          units: 0.1
        memory:
          size: 512Mi
        storage:
          - size: 1Gi
  placement:
    dcloud:
      pricing:
        service-1:
          denom: uakt
          amount: 10000
deployment:
  service-1:
    dcloud:
      profile: service-1
      count: 1`}
            />
          </div>
        </section>

        <section className="bg-[#1e1e1e] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Flux Deployment JSON Examples</h2>
          <p className="text-gray-300 mb-6">
            Below are examples of JSON configurations for deploying different types of containers on Flux. Click on each
            example to view the full configuration.
          </p>

          <div className="space-y-6">
            <JsonAccordion
              title="Public Docker Container"
              description="Deploy a public container from Docker Hub on Flux"
              json={`{
    "name": "testcli",
    "compose": [
        {
            "name": "benjatestcli",
            "description": "testcli",
            "repotag": "gridcloud/hello-app:2.0",
            "ports": [
              36522 
            ],
            "domains": [""],
            "environmentParameters": [
              NODE_ENV: TEST
            ],
            "commands": [],
            "containerPorts": [
                8080
            ],
            "containerData": "",
            "cpu": 0.1,
            "ram": 1000,
            "hdd": 10,
            "tiered": false,
            "secrets": "",
            "repoauth": ""
        }
    ],
    "instances": 3,
    "contacts": [],
    "geolocation": [],
    "expire": 5000,
    "nodes": [],
    "staticip": false
}`}
            />

            <JsonAccordion
              title="Private Docker Container"
              description="Deploy a private container from Docker Hub with authentication on Flux"
              json={`{
    "name": "testcli",
    "compose": [
        {
            "name": "private-container",
            "description": "Private Docker container example",
            "repotag": "private-repo/app:latest",
            "ports": [
              36522
            ],
            "domains": [""],
            "environmentParameters": [
                NODE_ENV: TEST
            ],
            "commands": [],
            "containerPorts": [
                8080
            ],
            "containerData": "",
            "cpu": 0.2,
            "ram": 2000,
            "hdd": 20,
            "tiered": true,
            "secrets": "",
            "repoauth": "username:password"
        }
    ],
    "instances": 1,
    "contacts": [],
    "geolocation": [],
    "expire": 5000,
    "nodes": [],
    "staticip": false
}`}
            />

            <JsonAccordion
              title="GitHub Container Registry"
              description="Deploy a container from GitHub Container Registry with authentication on Flux"
              json={`{
    "name": "testcli",
    "compose": [
        {
            "name": "benjatestcli",
            "description": "testcli",
            "repotag": "ghcr.io/alice/alicetest:latest",
            "ports": [
                36522
            ],
            "domains": [""],
            "environmentParameters": [
              NODE_ENV: TEST
            ],
            "commands": [],
            "containerPorts": [
                8080
            ],
            "containerData": "",
            "cpu": 0.1,
            "ram": 1000,
            "hdd": 10,
            "tiered": true,
            "secrets": "",
            "repoauth": "alice:Grid_github_Pat"
        }
    ],
    "instances": 3,
    "contacts": [],
    "geolocation": [],
    "expire": 5000,
    "nodes": [],
    "staticip": false
}`}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function YamlAccordion({ title, description, yaml }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-[#333] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#252525] p-4 text-left"
      >
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <ChevronDown size={20} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="bg-[#121212] p-4">
          <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
            <code>{yaml}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

function JsonAccordion({ title, description, json }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-[#333] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#252525] p-4 text-left"
      >
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <ChevronDown size={20} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="bg-[#121212] p-4">
          <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
            <code>{json}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
