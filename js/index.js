$(document).ready(function () {
    setTimeout(function () {
      $('#container').addClass('loaded');
      // Once the container has finished, the scroll appears
      if ($('#container').hasClass('loaded')) {
        // It is so that once the container is gone, the entire preloader section is deleted
        $('#preloader').delay(9000).queue(function () {
          $(this).remove();
        });
      }
    }, 3000);
  });

//   <!-- ========== FUNDING-HTML-SCRIPT ========== -->
  const chooseFile = document.getElementById("choose-file");
  const imgPreview = document.getElementById("img-preview");

  chooseFile.addEventListener("change", function () {
    getImgData();
  });

  function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });
    }
  }

//   <!-- ========== JOIN-INVESTOR-HTML-SCRIPT ========== -->

  const chooseFiles = document.getElementById("choose-file");
    const imgPreviews = document.getElementById("img-preview");

    chooseFiles.addEventListener("change", function () {
      getImgData();
    });

    function getImgData() {
      const files = chooseFiles.files[0];
      if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
          imgPreviews.style.display = "block";
          imgPreviews.innerHTML = '<img src="' + this.result + '" />';
        });
      }
    }

    // <!-- ========== LOGIN-HTML-SCRIPT ========== -->
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });


    // <!-- ========== SIGNUP-HTML-SCRIPT ========== -->

    const togglePasswords = document.querySelector('#togglePasswords');
    const passwords = document.querySelector('#id_passwords');

    togglePasswords.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = passwords.getAttribute('type') === 'passwords' ? 'text' : 'passwords';
      passwords.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
    });

    // <!-- ========== SUBMIT-PLAN-HTML-SCRIPT ========== -->

    const chooseFiless = document.getElementById("choose-file");
    const imgPreviewss = document.getElementById("img-preview");

    chooseFiless.addEventListener("change", function () {
      getImgData();
    });

    function getImgData() {
      const files = chooseFiless.files[0];
      if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
          imgPreviewss.style.display = "block";
          imgPreviewss.innerHTML = '<img src="' + this.result + '" />';
        });
      }
    }