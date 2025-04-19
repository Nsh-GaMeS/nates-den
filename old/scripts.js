document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const btn3 = document.getElementById('btn-3');

  btn1.addEventListener('click', () => {
    alert('Hacking initiated... Accessing data...');
  });

  btn2.addEventListener('click', () => {
    alert('Streaming data... Watch the flow...');
  });

  btn3.addEventListener('click', () => {
    alert('Powering up the system...');
  });
});


