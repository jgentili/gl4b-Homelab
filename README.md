# gl4b Homelab Documentation (`home.gl4b.xyz`)

Static GitHub Pages documentation site organizing the Proxmox VE virtualization architecture, six-VLAN network segmentation, OPNsense firewall policy, split-horizon DNS, and containerized service inventory.

## Site Structure
- `index.html` — Architectural overview, design decisions, hardware baseline, and high-level Mermaid topology diagram.
- `network.html` — 6-VLAN segmentation table, addressing conventions (`.1`, `.2–.49`, `.100–.250`), and TL-SG108E tagging notes.
- `services.html` — Searchable inventory of all hosts, VMs, LXCs, Docker containers, ports, hostnames, and authentication methods.
- `firewall.html` — Cross-VLAN traffic flow diagram, OPNsense aliases, and top-down rule sets per interface.
- `operations.html` — Risk register, disaster recovery mitigations, and open deployment items.

## Deploying to GitHub Pages
1. Push the contents of this folder to the root (or `/docs` directory) of your GitHub repository.
2. In GitHub, open **Settings &rarr; Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose your branch (e.g., `main`) and folder (`/root` or `/docs`), and click **Save**.
