# TeamHub

**TeamHub** is a Decentraland SDK7 scene designed as an interactive meeting hub where hosts and attendees can collaborate, engage in activities, and customize their virtual environment.  

The scene recreates a **virtual meeting room** with advanced moderation and interaction tools, turning any session into a dynamic and participatory experience.

---

## ✨ Features

### 👑 Host
- **Claim Host Role**: Only one player at a time can claim the podium to become the host.
- **Exclusive Podium Access**: Only the host can step onto the podium.
- **Activity Creation**:
  - **Multiple Choice Poll**: Create multiple-choice questions where attendees vote through a simple UI. Results update in real time, giving the host immediate feedback.
  - **Zone Polls**: Set up interactive polls where attendees vote by physically standing in one of four glowing zones on the floor. Each zone represents a possible answer, turning participation into an embodied experience.
  - **Ratings**: Collect structured feedback with a rating system (e.g. stars), letting participants quickly share their impressions.
  - **Q&A Sessions**:  
    Hosts can open live Q&A panels where attendees submit questions.  
    - **Moderation Options**: The host may enable question moderation, deciding which ones get published to the public list.  
    - **Anonymity**: Attendees may submit anonymous questions if enabled.  
    - **Management Tools**: Hosts can accept/reject moderated questions, delete inappropriate ones, or mark them as *new* or *answered*.  
    - **Voting System**: Both hosts and attendees can upvote questions, and the most voted automatically rise to the top of the list.
- **Moderation Tools**:
  - Ban/unban users.
  - Promote attendees to host / remove host role.
- **Customization**:
  - Change auditorium **logos and colors**.
  - **Share screen** on the main display.

### 🙋 Attendee
- **Poll Participation**: Vote via interactive UI for multiple-choice polls.
- **Zone Polls**: Stand on zones that represent answer choices.
- **Q&A Participation**:
  - Submit questions (anonymous or named, depending on host settings).
  - Vote on questions to bring the most relevant ones to the top.
- **Ratings**: Provide quick feedback on activities.

---

## 🚀 Try it out

Make sure you have the [Decentraland Client](https://decentraland.org/download/).

Paste this into your browser (Chrome, Firefox, etc.):  

```
decentraland://?position=0,0&realm=regenesislabs.dcl.eth
```

Or, if you are already inside Decentraland, run:  

```
/goto regenesislabs.dcl.eth
```

---

## 🛠️ Development

### Prerequisites
- [Node.js](https://nodejs.org/) v16+
- NPM v8+

### Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/decentraland-scenes/teamhub.git
   cd teamhub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run start-new-explorer
   ```

### Deployment

To deploy the project to your configured Decentraland world:
```bash
npm run deploy -- --target-content https://worlds-content-server.decentraland.org/
```

The deployment target and parcel coordinates are configured in the `scene.json`.

---

## 📚 Documentation

TeamHub is built with [Decentraland SDK7](https://docs.decentraland.org/creator/development-guide/sdk7/).  
It leverages **ReactECS** for UI, **message bus systems** for real-time interaction, and **custom moderation flows** for Q&A and polls.

---

## 🤝 Credits

Developed by **The Coding Cave** and **Fanny Pack** studios.  
Special thanks to contributors and testers from the Decentraland community.  
