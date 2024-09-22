// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar'); // Ensure you use the correct selector
    const sidebarToggle = document.getElementById('sidebarToggle');

    // Ensure sidebar is visible initially
    sidebar.classList.remove('closed');

    // Toggle sidebar visibility on button click
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('closed'); // Toggle the 'closed' class to show/hide the sidebar
    });
});



document.getElementById('copy-icon').addEventListener('click', function() {
    // Get the text of the h2 element
    var textToCopy = document.getElementById('connectt').innerText;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(function() {
        // Optionally, show a message or do something after copying
        console.log('Copied to clipboard: ' + textToCopy);
    }, function(err) {
        console.error('Failed to copy: ', err);
    });
});



