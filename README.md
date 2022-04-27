
<h1>The Cobalt Soul eComicbook Shop</h1>

<h3>E-Commerce shop for Digital, and Physical Comics and Graphic Novels</h3>

<hr>
<h3>Demo</h3>

<ul>
<li>The wireframe for this project is available on <a href='https://www.figma.com/file/Rott5ft7r1k1z0TWFtLN6A/The-Cobalt-Soul-eCommerce?node-id=5%3A94'>Figma</a> showing how I went about the design of my site along with individual components.</li>
<li>Here is a <a href='https://thecobaltsoul.netlify.app/'> Live Demo</a> of the site.</li>
</ul>


<h6>Version 0.1</h6>

<h2>My Approach</h2>

<p>For this project I wanted to use a CSS framework I was unfamiliar and decided on Tailwind CSS</p>

<h4>Challenges</h4>

<p>I had a number of challenges while working on this project, one being creating the functionality for a checkout cart whilst maintaining the state throughout all relevent components. Seeing that Tailwind doesn't provide you with components much like Bootstrap or Bulma does I went on the search for a library that uses tailwind as its base and found <a href='https://daisyui.com/'> daisy ui.</a></p>

<h4>Functionality</h4>

<p>
The site loads and pulls a set of 100 comics scheduled to release in the year 2022. I used conditional rendering on several components that would display whether or not certain data was available from the initial fetch request.
</p>
<p> Another thing I added was that the card on the hero of the main splash screen would be selected randomly and displayed should you leave that page and return to it, without making any additional calls to the API.</p>

<p>Current all functions that maintain start are held in the main app file and passed through to its children. A more efficient and cleaner way of implimenting this would have been to place the functions in a context file and allow them to be used globally without having to prop drill.</p>

<p>I will be returning to this project in the future to add additional end points to the API and queries to look up comics by featured characters or series.</p>

<h4>Technologies</h4>
<ul>
    <li>Marvel Developer API</li>
    <li>React</li>
    <li>Tailwind CSS</li>
    <li>Daisy UI</li>
</ul>

