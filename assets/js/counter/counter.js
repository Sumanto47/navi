var counter = document.querySelectorAll(".counter")

window.addEventListener("load", function() {
  counter.forEach(function(k, v) {
	  
	  var start = counter[v].getAttribute('data-count-start')
	  var end = counter[v].getAttribute('data-count-end')
	  var speed = counter[v].getAttribute('data-speed')

	  setInterval(function() {
		  start++;
		  if(start > end) {
			return false;
		  }
		  counter[v].innerText = start;

		}, speed)
  })
  
}, false)

