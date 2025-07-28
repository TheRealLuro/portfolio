document.addEventListener('DOMContentLoaded', function() {

    //Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    //check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    }

    //Add click event to theme toggle button
    themeToggle.addEventListener('click', function() {
        //toggle the dark theme class
        body.classList.toggle('dark-mode');
       
        //check if dark mode is now active
        const isDarkMode = body.classList.contains('dark-mode');

        //update button text
        themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

        //save preferece 
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
