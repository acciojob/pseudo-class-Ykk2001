#container {
  margin: 20px;
  font-size: 18px;	
}

/* Before Element */
#container::before {
  content: "Before Element ";
  color: #f00;
  font-size: 20px;
}

/* After Element */
#container::after {
  content: " After Element";
  color: #f00;
  font-size: 20px;
}
