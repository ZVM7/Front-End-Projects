document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm'); // Select the form by ID
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const usernameInput = document.getElementById('user');
    const usernameError = document.getElementById('usernameError');
  
    // Form validation logic
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Form validation triggered');
  
      let isValid = true;
  
      if (!nameInput.value.trim()) {
        nameError.style.display = 'block';  
        isValid = false;
      } else {
        nameError.style.display = 'none';  
      }
  
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailValue || !emailRegex.test(emailValue)) {
        emailError.style.display = 'block';  
        isValid = false;
      } else {
        emailError.style.display = 'none'; 
      }
  
      if (!usernameInput.value.trim()) {
        usernameError.style.display = 'block';  
        isValid = false;
      } else {
        usernameError.style.display = 'none';  
      }
  
      if (isValid) {

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

        window.location.href = 'ticket.html'
      }
    });
  
    const fileInput = document.getElementById('file-upload');
    const uploadIcon = document.getElementById('upload-icon');
    const removeBtn = document.getElementById('remove-btn');
    const changeBtn = document.getElementById('change-btn');
    const uploadtag = document.querySelector('.tagup');
    const fileError = document.getElementById('fileError');

  
    uploadIcon.addEventListener('click', function() {
      fileInput.click();
      uploadtag.classList.add('hidden');

    });
  
    fileInput.addEventListener('change', function(event) {
      event.preventDefault()
      const file = event.target.files[0];
      
      fileError.style.display = 'none';

      if (file.size > 500 * 1024) {
        fileError.textContent = 'File size must be less than 500KB.';
        fileError.style.display = 'block';
        fileInput.value = ''; 
        return;
    }

    const allowedTypes = ['image/png', 'image/jpeg'];
    if (!allowedTypes.includes(file.type)) {
        fileError.textContent = 'Only PNG or JPG files are allowed.';
        fileError.style.display = 'block';
        fileInput.value = ''; 
        return;
    }


      if (file) {
        const imageURL = URL.createObjectURL(file);

       
        localStorage.setItem('uploadedImage', imageURL);


        
        uploadIcon.src = imageURL;
        
        removeBtn.classList.remove('hidden');
        changeBtn.classList.remove('hidden');
      }
    });
  
    removeBtn.addEventListener('click', function(event) {

      uploadIcon.src = 'assets/images/icon-upload.svg'; 
      
      removeBtn.classList.add('hidden');
      changeBtn.classList.add('hidden');
      uploadtag.classList.remove('hidden');
      event.preventDefault();


    });
  
    changeBtn.addEventListener('click', function(event) {
      fileInput.click();
      event.preventDefault();

    });
  });
  