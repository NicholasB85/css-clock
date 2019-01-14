const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hrHand = document.querySelector('.hour-hand')

    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      // console.log(seconds);

      const mins = now.getMinutes();
      const minDegrees = ((mins / 60) * 360 + 90);
      minHand.style.transform = `rotate(${minDegrees}deg)`;
      // console.log(mins);

      const hours = now.getHours();
      const hrDegrees = ((hours / 12) * 360 + 90);
      hrHand.style.transform = `rotate(${hrDegrees}deg)`;
      console.log(hours);

    }
    
    setInterval(setDate, 1000);