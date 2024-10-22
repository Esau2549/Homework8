console.log('Hello World!');

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    alert('Resume downloaded successfully!');
});

// Function to create a greeting message
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}


function displayGreeting() {
    const name = "Emmanuel"; // 
    const greetingMessage = showGreeting(name);
    document.getElementById('greeting').textContent = greetingMessage;
}

// Call displayGreeting when the page loads
window.onload = displayGreeting;








const projectTitles = [
    "J Performance Webpage ",
    "Pro-hands Detailling Webpage ",
    "Sauceda's Towing Webpage "
  ];

  const projectDescriptions = [
    "Create a new webpage for a mechanics shop show casing all of his work",
    "A page dedicated to shwong off the amazing job of a detailing business",
    "Create a page showing all the service provided as well as the locations and free quotes."
  ];

  const projectDeadlines = [
    "2024-12-31", // Future
    "2024-10-01", // Past
    "2024-11-15"  // Future
  ];

  // Function to calculate countdown
  function calculateCountdown(deadline) {
    const deadlineDate = new Date(deadline).getTime();
    const now = new Date().getTime();
    const timeDiff = deadlineDate - now;

    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      return "Deadline passed";
    }
  }

  // Function to determine project status based on the deadline
  function getProjectStatus(deadline) {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    // Compare deadline with the current date
    if (deadlineDate > currentDate) {
      return "Ongoing";  
    } else {
      return "Completed"; 
    }
  }

  // Function to set the status class based on the project status
  function getStatusClass(status) {
    return status === "Ongoing" ? "status ongoing" : "status completed";
  }

  // Function to update countdowns for all projects
  function updateCountdowns() {
    const countdownElements = document.getElementsByClassName('countdown');
    for (let i = 0; i < projectDeadlines.length; i++) {
      countdownElements[i].textContent = calculateCountdown(projectDeadlines[i]);
    }
  }

 
  const projectsList = document.getElementById('projects-ul');

  for (let i = 0; i < projectTitles.length; i++) {
    // Create a new list item for each project
    const projectItem = document.createElement('li');
    projectItem.className = 'project';

    const projectStatus = getProjectStatus(projectDeadlines[i]);

    // Add project details (title, description, deadline, countdown, status) to the list item
    projectItem.innerHTML = `
      <strong>Title:</strong> ${projectTitles[i]} <br>
      <strong>Description:</strong> ${projectDescriptions[i]} <br>
      <strong>Deadline:</strong> ${projectDeadlines[i]} <br>
      <strong>Time Left:</strong> <span class="countdown"></span> <br>
      <strong>Status:</strong> <span class="${getStatusClass(projectStatus)}">${projectStatus}</span>
    `;


    projectsList.appendChild(projectItem);
  }

  
  updateCountdowns();

  
  setInterval(updateCountdowns, 1000);










document.getElementById('skill-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Get the entered skill from the input field
    const skillInput = document.getElementById('skill-input');
    const newSkill = skillInput.value.trim(); 

   
    if (newSkill !== '') {
      // Create a new list item (li) to hold the skill
      const skillItem = document.createElement('li');
      skillItem.className = 'skill';
      skillItem.textContent = newSkill;

      
      document.getElementById('skills-ul').appendChild(skillItem);

      
      skillInput.value = '';
    }
  });





  let downloadCount = 0; // Initialize download count

  // update download count
  function incrementDownloadCount() {
    downloadCount++; // Increment count
    document.getElementById('download-count').textContent = downloadCount; 
  }

 
  document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    incrementDownloadCount(); 
  });




    // Arrays for education and experience
    const educationData = [
        { location: "Roger Williams University", degree: "Intro to Engineering - Student", duration: "06/27/2017 - 07/21/2017" },
        { location: "Seattle University", degree: "Zoology Course - Student", duration: "06/25/2018 - 07/20/2018" },
        { location: "Arizona Western College", degree: "CS Major - Student", duration: "08/2022 - 05/2024" }
      ];
  
      const experienceData = [
        { location: "Advance Call Center Technologies", position: "Customer Loyalty Group Representative", duration: "07/2022 - 08/2022" },
        { location: "O'Reilly Auto Parts", position: "Retail Service Specialist (RSS)", duration: "11/2022 - Present" }
      ];
  
      // Function to create rows for Education and Experience
      function populateTable() {
        const tableBody = document.getElementById('edu-exp-body');
  
        // Add Education data
        educationData.forEach((edu, index) => {
          const row = document.createElement('tr');
          if (index === 0) {
            row.innerHTML = `
              <td rowspan="${educationData.length}">Education</td>
              <td>${edu.location}</td>
              <td>${edu.degree}</td>
              <td>${edu.duration}</td>
            `;
          } else {
            row.innerHTML = `
              <td>${edu.location}</td>
              <td>${edu.degree}</td>
              <td>${edu.duration}</td>
            `;
          }
          tableBody.appendChild(row);
        });
  
        // Add Experience data
        experienceData.forEach((exp, index) => {
          const row = document.createElement('tr');
          if (index === 0) {
            row.innerHTML = `
              <td rowspan="${experienceData.length}">Experience</td>
              <td>${exp.location}</td>
              <td>${exp.position}</td>
              <td>${exp.duration}</td>
            `;
          } else {
            row.innerHTML = `
              <td>${exp.location}</td>
              <td>${exp.position}</td>
              <td>${exp.duration}</td>
            `;
          }
          tableBody.appendChild(row);
        });
      }
  
      // Call the function to populate the table
      populateTable();
    