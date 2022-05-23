class SweetAlert {
  position = "center";
  icon = "warning";
  title = "Oops, Something Went Wrong";
  showConfirmButton = true;
  confirmButtonText = "Yes";
  confirmButtonColor = "var(--danger-color)";
  showCancelButton = true;
  timer = 3000;
  timerProgressBar = true;
  customClass = new customClass();
}

class customClass {
  timerProgressBar = "progress-bar";
}

export default SweetAlert;
