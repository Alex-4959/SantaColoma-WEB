# Multimedia Web Project – Santa Coloma de Farners

This project is a multimedia tourism website about Santa Coloma de Farners, developed as the final assignment for the subject Multimedia and User Interfaces.

The objective of the project has been to design and implement a functional and visually coherent website that integrates multimedia elements such as images, audio and video, together with an interactive activity planning section. The content of the website is based on real locations and tourism-related elements from the town in order to keep the project realistic and meaningful.

The site has been created using React and Vite, and deployed using GitHub Pages.



## 1. Page structure (wireframe description)

The website follows a single-page layout with structured sections that are organised in a clear and logical way. The aim has been to design a simple and intuitive navigation structure, similar to a small promotional tourism website.

The sections of the page are the following:

1. Navigation bar

The page includes a fixed navigation bar at the top of the site. The navigation menu allows the user to move between sections through internal anchor links. The fixed position of the navbar makes access to the navigation elements available at all times during scrolling.

2. Hero section

This is the main introductory section of the website and it appears at the top of the page. It includes:

- a main title introducing the destination
- a short descriptive text
- a call to action button
- a background video related to Santa Coloma de Farners

The objective of this section is to create an attractive initial visual impact and present the town in a multimedia way.

3. Highlights section

This section presents three thematic blocks that summarise the main identity aspects of the town, such as:

- nature and landscape
- well-being and thermal tourism
- local culture and traditions

Each block is displayed using card-style containers that help organise information in a clear and visually structured manner.

4. Attractions section

This section contains a set of cards representing real attractions and places of interest from Santa Coloma de Farners.

Each attraction card contains:

- an image
- a title
- a category label
- a short descriptive text

This section aims to show representative locations of the area in a concise and accessible way.

5. Activities planner (interactive section)

This section is designed as an interactive element of the website, where the user can simulate the planning of a visit by adding and removing activities.

Each activity card contains:

- name of the activity
- type of activity
- estimated duration in hours
- difficulty level
- recommended audience
- area or environment of the activity
- descriptive text

The user can add activities to a personal plan and the system updates the total estimated duration. This simulates a basic planning tool for a visit to the town.

6. Audio section

The website includes a section with an audio player, where the user can listen to a short descriptive audio related to the town.

The audio element has been added through a standard HTML5 audio tag, ensuring compatibility and ease of use.

7. Image gallery

This section contains a gallery of real photographs from Santa Coloma de Farners.

The images are displayed in a grid layout. One of the images has been edited as part of the practical requirements of the assignment. The edition consisted of basic adjustments such as cropping and light and colour enhancement, with the aim of improving visual composition and highlighting natural tones.

8. Information and contact section

This block includes practical information for the user and a contact email address, which is implemented as a clickable mailto link.

9. Footer

The website ends with a footer that closes the page and provides a final reference zone for the user.

The overall structure of the site has been designed to be coherent, consistent and easy to understand, maintaining a clear hierarchy of content throughout the page.



## 2. Implemented features and multimedia elements

The project incorporates different multimedia components and interactive features, which were required in the assignment guidelines. The implemented elements are described below.

1. Background video in the hero section

The hero section includes a background video that appears behind the main text. This video is related to the town and contributes to creating a more immersive and attractive introduction to the website.

Initially, a local video file was used. Later, due to file size constraints in the repository, the video was optimised and compressed so that it could be included while maintaining acceptable quality and performance.

2. Use of real images

Images are used across different sections of the website:

- attractions section
- activities section
- image gallery

All images correspond to real locations from Santa Coloma de Farners, which gives coherence and realism to the project.

One of the images in the gallery has been edited as part of the assignment requirement to include an edited multimedia element. The edition process consisted of basic visual adjustments such as cropping, light correction and tonal contrast improvement.

3. Audio playback element

The website includes an audio player that allows the user to listen to a short descriptive recording.

The integration has been implemented using a standard audio control element, which allows playback, pause and timeline navigation in a simple and accessible way.

4. Interactive activity planner

The activities planner is the main interactive component of the project.

The user can:

- add activities to a visit plan
- remove activities from the plan
- view the total estimated duration of selected activities

The functionality has been implemented using React state handling, which dynamically updates the list of selected activities.

5. Responsive design

The website includes responsive layout adaptations so that it can be viewed correctly on both desktop and mobile devices.

CSS grid and responsive breakpoints have been applied to adjust alignment, spacing and card layout depending on screen width.

6. Visual and aesthetic design

The visual style of the website has been designed using a colour palette inspired by the natural environment of the area.

The chromatic range is based mainly on:

- green tones, associated with forest and natural landscape
- blue-green tones, related to the river and natural areas
- orange tones, referring to local products and cultural identity

The objective has been to create a calm, natural and visually consistent aesthetic.



## 3. Development process

The development of the website has followed a progressive and iterative process, structured in different phases.

1. Initial planning

First, the assignment requirements were analysed to understand:

- the structure of the website
- the type of content required
- the multimedia components to be included

Based on this review, the main sections of the website and their purpose were defined.

2. Content structure and wireframe approach

Before implementation, the logical structure of the page was organised and the internal order of sections was determined. A conceptual wireframe was defined mentally and through organisation of components, prioritising clarity and coherence.

The structure was designed as a vertical one-page layout, with blocks that group related content.

3. Implementation in React using components

The website has been implemented using React with Vite.

Each major section of the site has been developed as an independent component, including:

- Hero
- Highlights
- Attractions
- Activities
- Gallery
- Audio
- Information

This component-based structure has allowed the code to remain modular and easier to maintain.

4. Styling and user interface refinement

Once the basic functionality was implemented, several iterations were carried out on the visual design.

This process included:

- improvement of spacing and margins
- alignment adjustments
- refinement of typography
- enhancement of card aesthetics
- incorporation of subtle hover animations

The aim was to improve usability and achieve a more polished and visually coherent final result.

5. Integration of multimedia elements

During this phase, the different multimedia elements were added and configured:

- images in cards and gallery
- background video in the hero section
- audio player
- edited gallery image

Special attention was paid to file weight and optimisation, especially for deployment compatibility.

6. Implementation of activity planner logic

The logic of the activities planner was implemented using React state management to allow:

- selection and deselection of activities
- update of the selected list
- calculation of estimated total duration

This part of the project helped turn the website into something more than a static page.

7. Deployment process

The project was deployed using GitHub Pages.

Steps included:

- generating the production build with Vite
- placing the build output inside the docs folder
- configuring the base path for GitHub Pages
- publishing and testing the public version

During deployment, some adjustments had to be made related to path configuration to avoid blank page issues.

Throughout the entire development process, both the visual design and the structure of the content were progressively reviewed and improved in order to achieve a final version that was coherent, functional and visually consistent.



## 4. Instructions to run the website locally

The following steps explain how to download and run the project locally.

1. Clone the repository

Run the following command: git clone https://github.com/alex-4959/SantaColoma-WEB

2. Enter the project folder
    Command: cd SantaColoma-WEB

3. Install dependencies
Command: npm install

4. Start the development server
Command: npm run dev

Once executed, the website can be accessed locally through:

http://localhost:5173



## 5. Deployment information

The project has been deployed using GitHub Pages.

The build generated with Vite has been placed inside the docs folder of the repository, which is configured as the publication source.

The public version of the website can be accessed through the following link:

https://alex-4959.github.io/SantaColoma-WEB/



## 6. Source code availability

The complete source code of the project, including components, styles, multimedia assets and configuration files, is available in this same repository under the name:

SantaColoma-WEB

This repository contains both the development version and the deployment build used for the public version of the website.


## 7. Conclusion

The development of this project has allowed me to work with the design and implementation of a multimedia website in a practical and structured way. Throughout the process I have applied concepts related to user interface design, multimedia integration, content organisation and interactive behaviour using React components.

The project has also helped me to better understand the importance of planning the structure of a website before implementation, as well as the need to progressively refine visual and usability aspects during development. The integration of images, audio and video elements, together with the creation of the interactive activities planner, has contributed to turning the site into a more complete and meaningful product.

Finally, the deployment process using GitHub Pages has provided me with experience in preparing a production build, managing assets and solving configuration issues related to paths and hosting. Overall, the project has been useful both from a technical perspective and as an opportunity to apply theoretical concepts in a practical and realistic context.





