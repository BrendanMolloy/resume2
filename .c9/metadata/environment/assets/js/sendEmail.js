{"filter":false,"title":"sendEmail.js","tooltip":"/assets/js/sendEmail.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["function sendMail(contactForm) {","    emailjs.send(\"gmail\", \"rosie\", {","        \"from_name\": contactForm.name.value,","        \"from_email\": contactForm.emailaddress.value,","        \"project_request\": contactForm.projectsummary.value","    })","    .then(","        function(response) {","            console.log(\"SUCCESS\", response);","        },","        function(error) {","            console.log(\"FAILED\", error);","        }","    );","    return false;  // To block from loading a new page","}"],"id":1}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":12},"action":"insert","lines":["    "],"id":2},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["   "]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":[" "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":[" "]},{"start":{"row":5,"column":5},"end":{"row":5,"column":8},"action":"insert","lines":["   "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["   "]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":[" "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":[" "]},{"start":{"row":8,"column":13},"end":{"row":8,"column":16},"action":"insert","lines":["   "]},{"start":{"row":9,"column":8},"end":{"row":9,"column":12},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":14},"end":{"row":11,"column":16},"action":"insert","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":13,"column":4},"end":{"row":13,"column":8},"action":"insert","lines":["    "]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"remove","lines":[" "]},{"start":{"row":15,"column":1},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":0},"end":{"row":16,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":81,"mode":"ace/mode/javascript"}},"timestamp":1566402587680,"hash":"d71198faccf59819f6ef870e6cf8513897431347"}