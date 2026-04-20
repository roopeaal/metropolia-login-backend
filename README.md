## Metropolia Login Security Awareness Demo

This project is a controlled security awareness demo built for an authorized Practical Hacking course exercise. The goal was to demonstrate how convincing a fake login page can look, how easily users can trust a familiar interface, and why phishing remains effective even against technically aware users.

Instead of collecting real credentials, the demo is intentionally designed to be safe:
- passwords are never stored or displayed
- usernames are masked before tracking
- the result view immediately reveals that the page is only a course exercise
- the page explains the security lesson directly to the user

### Why this project matters

This project is not about copying a login page for its own sake. It is about showing, in a realistic but controlled way, how small design details, familiar branding, and user habits can create security risk. From a defensive perspective, this is exactly the kind of practical example that helps people understand phishing better than theory alone.

### What I wanted to demonstrate

- how a realistic phishing-style front end can be recreated with a polished and responsive UI
- how to build a lightweight backend that tracks events without storing sensitive data
- how to separate harmless educational tracking from real credential collection
- how to turn a security concept into a working end-to-end demo that is deployable and easy to present

### Technical highlights

- Responsive front end built with HTML, CSS, and JavaScript
- Real-time event tracking through a backend endpoint
- Username masking before storage or display
- Result view that reports total interactions and recent masked usernames
- Deployment with a public-facing front end and backend service
- Clear emphasis on security awareness, controlled testing, and ethical boundaries

### Security and ethics

This project was created as an educational demonstration in an authorized course context. It was intentionally implemented so that real passwords are not stored, shown, or processed beyond the local input moment. The main purpose is to support phishing awareness and show why users should always verify the address bar, domain, and trustworthiness of any login page before entering credentials.

### What this says about me as a builder

For me, the value of this project is not only the final visual result. It shows that I can take a security idea, define safe boundaries, build the front end, connect the backend, deploy the whole solution, and present the outcome in a way that is technically clear and meaningful to non-technical audiences as well.
