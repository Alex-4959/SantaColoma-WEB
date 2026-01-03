# Multimedia Web Project — Santa Coloma de Farners

This project is a small multimedia tourism website about **Santa Coloma de Farners**, developed as the final assignment for the subject *Multimedia and User Interfaces*.

The aim of the project is to design a functional, usable and visually attractive website that integrates different multimedia elements (video, images, audio) and includes interactive content related to real locations and activities from the town.

The website has been implemented using **React + Vite** and deployed through **GitHub Pages**.



---

## 1️⃣ Page structure (wireframe description)

The structure of the page follows a single-page layout divided into well-defined sections. The design is focused on being clear, intuitive and easy to navigate:

### ✔ Navigation bar (header)
Fixed navbar with links to scroll to each section of the page.

### ✔ Hero section (intro with background video)
Welcome section with:
- title and short introduction text
- background video representing the town
- call-to-action button

This works as the visual presentation of the website.

### ✔ Highlights section
Three small cards explaining the key identity of the town:
- nature and landscape
- well-being and thermal tourism
- local products and tradition

### ✔ Attractions section
Cards with **real locations** including:
- image
- category badge
- short descriptive text

Places include examples such as the castle, Sant Salvador park or the historic centre.

### ✔ Activities planner (interactive)
Section where users can:
- add activities to their visit plan
- remove them
- see total estimated duration

Each card includes duration, difficulty and suitability.

### ✔ Audio section
A short audio description about the place.

### ✔ Image gallery
Gallery with real photographs of the town.
One of the images has been **edited** (crop + light and colour adjustment).

### ✔ Information & contact
Useful information and a clickable contact email.

### ✔ Footer
Closing message and end of page.

The structure is designed to simulate a real small tourism promotion website.



---

## 2️⃣ Implemented features and multimedia elements

The project integrates several multimedia and interactive components required in the assignment:

### 🎥 Background video (hero section)
A promotional background video is used in the hero section to create an immersive introduction.  
Due to repository limitations, the file was optimised and compressed before including it in the project.

### 🖼 Real images from the town
Images are used in:
- attractions section
- activities
- gallery

They correspond to real locations from Santa Coloma de Farners.

One gallery image has been **visually edited** to improve composition and highlight natural green tones (basic crop, contrast and brightness adjustments).

### 🎧 Audio playback element
The page includes an HTML5 audio player with a descriptive audio track.

### 🧩 Interactive activity planner
Users can:
- add activities to a personal trip plan  
- remove them again  
- see total visit duration

Cards include:
- duration (hours)
- difficulty level
- recommended profile
- type of activity

### 📱 Responsive design
The layout adapts to desktop and mobile screens using CSS grid and responsive rules.

### 🎨 Visual design & style
The colour palette is inspired by the identity of the area:

- green tones → forest and natural landscape  
- blue-green tones → river and environment  
- orange tones → local gastronomy and tradition  

The goal was to create a natural, calm and welcoming visual aesthetic.



---

## 3️⃣ Development process (summary)

The development process followed these phases:

1. **Initial planning**
   Review of assignment requirements and definition of the website sections.

2. **Wireframe and content structure**
   Organisation of the layout and page sections before implementation.

3. **Component-based implementation in React**
   Each section was implemented as a separate component:
   Hero, Highlights, Attractions, Activities, Audio, Gallery, Info…

4. **Styling and UI refinement**
   Iterative improvement of:
   spacing, typography, colours, alignment and card visuals.

5. **Multimedia integration**
   Addition of:
   - images
   - video background
   - audio element
   - image editing and optimisation

6. **Activity planner logic**
   Implementation of activity selection and state handling.

7. **Deployment**
   Build generated with Vite and published via `docs/` using GitHub Pages, including base path configuration.

Throughout the process I made several revisions to improve both visual quality and user experience, ensuring that the website looks coherent, clean and functional.



---

## 4️⃣ Instructions to run the website locally

To run the project locally:

1. Clone the repository

```bash
git clone https://github.com/alex-4959/SantaColoma-WEB
