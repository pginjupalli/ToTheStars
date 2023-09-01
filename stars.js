$('#nebula').on("click", revealNebulaInfo);
$('#supernova').on("click", revealSupernovaInfo);
$('#black-dwarf').on("click", revealBlackDwarfInfo);
$('#dyson-sphere').on("click", revealDysonSphereInfo);

function revealNebulaInfo() {
  $('.extra-info1').text("A nebula is an enormous cloud of dust and gas. They're considered the birthplace of stars, which gave them the name 'star nursuries'. They is usually comprised of dust, hydrogen, and helium. Also, the materials are very spread apart, but sometimes, gravity may force them together, thus creating a protostar. Some nebulae are formed from gas and dust thrown away from a supernova. They could also form from clouds of cold intersteller gas. They are very big, sometimes spanning light-years across space. Some examples of nebulas are the Orion Nebula and the Eagle Nebula. The one pictures above is the Helix Nebula.");
}

function revealSupernovaInfo() {
  $('.extra-info1').text("A supernova is a massive explosion of a star. This occurs near the end of a star's life and only occurs to extremely massive stars. This is why dwarf stars like our Sun don't tend to explode in a supernova while red supergiants like Betelgeuse do. A supernova itself can be caused by a sudden gravitational collapse of the star's core, causing an outward explosion. Once a supernova occurs, that star will either become a neutron star or a black hole depending on its mass.")
}

function revealBlackDwarfInfo() {
  $('.extra-info1').text("A black dwarf is a theoretical star that appears after a white dwarf and cooled off completely. Since it lacks its heat, it won't emit any light, making it nearly impossible to see. Some also speculate that black dwarfs may produce supernova explosions. However, white dwarfs takes billions of years to cool, and the universe is only 14 billion years old, so there aren't any black dwarfs in existence yet. ")
}

function revealDysonSphereInfo() {
  $('.extra-info1').text("A dyson sphere is a theoretical megastructure that encases a star, like a shell, in order to extract its energy output. There are different types of dyson spheres, each designed to be an efficient and structurally sound machine. There are also varients of this structure, one of them being a dyson swarm. This would be a set of individual satellites that surround the star. This structure could be necessary for a furturistic society, but as of now, the idea is far-fetched considering our current resources. ")
}