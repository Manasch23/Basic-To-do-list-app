// Folder Creation
document.getElementById('folder-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const folderName = document.getElementById('folder-name').value;
    
    if (folderName) {
      addFolder(folderName);
    }
  
    document.getElementById('folder-name').value = ''; // Clear the input field after folder is added
  });
  
  function addFolder(folderName) {
    const folderList = document.getElementById('folder-list');
    const li = document.createElement('li');
    li.textContent = folderName;
  
    // You can add a way to categorize tasks under specific folders here
    folderList.appendChild(li);
  }
  
  // Task Creation
  document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const taskText = document.getElementById('task').value;
    const taskDateTime = document.getElementById('date-time').value;
  
    if (taskText && taskDateTime) {
      addTask(taskText, taskDateTime);
    }
  
    document.getElementById('task').value = ''; // Clear the task input field
    document.getElementById('date-time').value = ''; // Clear the date-time input field
  });
  
  function addTask(taskText, taskDateTime) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = `${taskText} - Due: ${taskDateTime}`;
  
    // Add task to the list
    taskList.appendChild(li);
  
    // Optionally, set up a notification for the task
    scheduleNotification(taskText, taskDateTime);
  }
  
  // Function to schedule notifications (using simple JavaScript timeout for demo purposes)
  function scheduleNotification(taskText, taskDateTime) {
    const taskDueDate = new Date(taskDateTime).getTime();
    const now = new Date().getTime();
    const timeUntilNotification = taskDueDate - now;
  
    if (timeUntilNotification > 0) {
      setTimeout(() => {
        alert(`Reminder: ${taskText} is due!`);
      }, timeUntilNotification);
    }
  }
  