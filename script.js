#container {
  margin: 20px;
  font-size: 18px;
}

/* Insert text BEFORE the container content */
#container::before {
  content: "Before Text - ";
  color: #f00;
  font-size: 20px;
}

/* Insert text AFTER the container content */
#container::after {
  content: " - After Text";
  color: #f00;
  font-size: 20px;
}

