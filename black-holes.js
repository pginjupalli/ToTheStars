
$('#what').on("click", revealWhatInfo);
$('#where').on("click", revealWhereInfo);
$('#how').on("click", revealHowInfo);



function revealWhatInfo() {
  $('#what-e').text("Black holes have such a strong gravitation force that not even light can escape it. Because of this, it's impossible to see a black hole with the naked eye. They are also extremely dense. A black hole that's just a few kilometes or miles in diameter can have as much mass as our Sun.");
};

function revealWhereInfo() {
  $('#what-e').text("Normal black holes can appear wherever a supernova occurs. Supermassive black holes, however, are found in the center of every galaxy. They are much bigger in size and mass than normal black holes.");
};

function revealHowInfo() {
  $('#what-e').text("Black holes are formed after a supernova occurs. Supernovas are explosions that occur in massive stars near the end of their lifetime. However, not every result of a supernova will be a black hole. Stars that have a little less mass may become a neutron star instead.");
};


$('#eventhorizon').on("click", revealEventHorizon);
$('#ergosphere').on("click", revealErgosphere);
$('#singularity').on("click", revealSingularity);

function revealEventHorizon() {
  $('#part-e').text("The event horizon is the border of a black hole and sometimes called 'the point of no return'. This is due to the fact that anything that crosses this line cannot escape. Gravity is far too strong to resist at that point.");
};

function revealErgosphere() {
  $('#part-e').text("The ergosphere is a feature present in rotating black holes. When rotating, these  black holes can spin with extreme speeds, sometimes close to the speed of light. This causes the space around them to get dragging in a circular motion. This space is called the ergosphere. If one were to enter it, they would get forced into the black hole's orbit and possibly get sucked in, similar to a whirlpool.");
};

function revealSingularity() {
  $('#part-e').text("The singularity is a theorized point at the center of a black hole. It's thought to be infiniely small due to the extreme force of gravity pulling at it. The point is comprised of the mass of the entire black hole. In rotating black holes, the single point would also rotate, causing the singularity to become a ringularity.");
};


$('#time').on("click", revealTime)
$('#light').on("click", revealLight)
$('#radiation').on("click", revealRadiation)

function revealTime() {
  $('#effect-e').text("Because the gravity of a black hole is so strong, it's able to bend time. So, if you were to get close enough to a black hole and leave safely, you'd return to find that years have past while you haven't aged a day. Also, If a spectator were to watch you enter a black hole, they'd see you freeze in place, when in reality, time is going much slower for you.")
}

function revealLight() {
  $('#effect-e').text("Since a black hole's gravity is so strong, it's able to bend light into its orbit before sucking it in. Because of this, your vision as you get closer to a black hole gets strange. You'd end up seeing the back of your head due to light behind you being bent in place front of you.")
}

function revealRadiation() {
  $('#effect-e').text("At every moment, a black hole is losing its mass as radiation, therefore decreasing in size. However, this process, called Hawking Radiation, is incredibly slow, potentially taking trillions upon trillion of years to lose just a fraction of a percentage of the entire mass.")
}