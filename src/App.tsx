import { BrowserRouter, Route, Routes } from "react-router-dom";
import Earth from "./components/pages/Earth";
import Error from "./components/pages/Error";
import Jupiter from "./components/pages/Jupiter";
import Mars from "./components/pages/Mars";
import Mercury from "./components/pages/Mercury";
import Neptune from "./components/pages/Neptune";
import Saturn from "./components/pages/Saturn";
import Uranus from "./components/pages/Uranus";
import Venus from "./components/pages/Venus";
import Root from "./Root";

import mercury from "./assets/images/planet-mercury.svg";
import venus from "./assets/images/planet-venus.svg";
import earth from "./assets/images/planet-earth.svg";
import mars from "./assets/images/planet-mars.svg";
import jupiter from "./assets/images/planet-jupiter.svg";
import saturn from "./assets/images/planet-saturn.svg";
import uranus from "./assets/images/planet-uranus.svg";
import neptune from "./assets/images/planet-neptune.svg";

import mercuryStruct from "./assets/images/planet-mercury-internal.svg";
import venusStruct from "./assets/images/planet-venus-internal.svg";
import earthStruct from "./assets/images/planet-earth-internal.svg";
import marsStruct from "./assets/images/planet-mars-internal.svg";
import jupiterStruct from "./assets/images/planet-jupiter-internal.svg";
import saturnStruct from "./assets/images/planet-saturn-internal.svg";
import uranusStruct from "./assets/images/planet-uranus-internal.svg";
import neptuneStruct from "./assets/images/planet-neptune-internal.svg";

import mercurySurface from "./assets/images/geology-mercury.png";
import venusSurface from "./assets/images/geology-venus.png";
import earthSurface from "./assets/images/geology-earth.png";
import marsSurface from "./assets/images/geology-mars.png";
import jupiterSurface from "./assets/images/geology-jupiter.png";
import saturnSurface from "./assets/images/geology-saturn.png";
import uranusSurface from "./assets/images/geology-uranus.png";
import neptuneSurface from "./assets/images/geology-neptune.png";

const data = [
  {
    id: 1,
    planet: "mercury",
    planetSrc: mercury,
    planeStructtSrc: mercuryStruct,
    planetSurfaceSrc: mercurySurface,
    overview:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structure:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surface:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    rotat: "58.6 days",
    revol: "87.97 days",
    radius: "2,439.7 km",
    temp: "430°c",
  },
  {
    id: 2,
    planet: "venus",
    planetSrc: venus,
    planeStructtSrc: venusStruct,
    planetSurfaceSrc: venusSurface,
    overview:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    structure:
      "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    surface:
      "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    rotat: "243 days",
    revol: "224.7 days",
    radius: "6,051.8 km",
    temp: "471°c",
  },
  {
    id: 3,
    planet: "earth",
    planetSrc: earth,
    planeStructtSrc: earthStruct,
    planetSurfaceSrc: earthSurface,
    overview:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    structure:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    surface:
      "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    rotat: "0.99 days",
    revol: "365.26 days",
    radius: "6,371 km",
    temp: "16°c",
  },
  {
    id: 4,
    planet: "mars",
    planetSrc: mars,
    planeStructtSrc: marsStruct,
    planetSurfaceSrc: marsSurface,
    overview:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    structure:
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    surface:
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    rotat: "1.03 days",
    revol: "1.88 years",
    radius: "3,389.5 km",
    temp: "−28°c",
  },
  {
    id: 5,
    planet: "jupiter",
    planetSrc: jupiter,
    planeStructtSrc: jupiterStruct,
    planetSurfaceSrc: jupiterSurface,
    overview:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    structure:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    surface:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    rotat: "9.93 hours",
    revol: "11.86 years",
    radius: "69,911 km",
    temp: "-108°c",
  },
  {
    id: 6,
    planet: "saturn",
    planetSrc: saturn,
    planeStructtSrc: saturnStruct,
    planetSurfaceSrc: saturnSurface,
    overview:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    structure:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    surface:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
    rotat: "10.8 hours",
    revol: "29.46 years",
    radius: "58,232 km",
    temp: "-138°c",
  },
  {
    id: 7,
    planet: "uranus",
    planetSrc: uranus,
    planeStructtSrc: uranusStruct,
    planetSurfaceSrc: uranusSurface,
    overview:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    structure:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    surface:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    rotat: "17.2 hours",
    revol: "84 years",
    radius: "25,362 km",
    temp: "-195°c",
  },
  {
    id: 8,
    planet: "neptune",
    planetSrc: neptune,
    planeStructtSrc: neptuneStruct,
    planetSurfaceSrc: neptuneSurface,
    overview:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    structure:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    surface:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    rotat: "16.08 hours",
    revol: "164.79 years",
    radius: "24,622 km",
    temp: "-201°c",
  },
];

function App() {
  return (
    <div className="App">
      <Root />
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Mercury
                planet={data[0].planet}
                image={data[0].planetSrc}
                imageStr={data[0].planeStructtSrc}
                imageSurf={data[0].planetSurfaceSrc}
                overview={data[0].overview}
                structure={data[0].structure}
                surface={data[0].surface}
                rotat={data[0].rotat}
                revol={data[0].revol}
                radius={data[0].radius}
                temp={data[0].temp}
              />
            }
          />
          <Route
            path="/mercury"
            element={
              <Mercury
                planet={data[0].planet}
                image={data[0].planetSrc}
                imageStr={data[0].planeStructtSrc}
                imageSurf={data[0].planetSurfaceSrc}
                overview={data[0].overview}
                structure={data[0].structure}
                surface={data[0].surface}
                rotat={data[0].rotat}
                revol={data[0].revol}
                radius={data[0].radius}
                temp={data[0].temp}
              />
            }
          />
          <Route
            path="/venus"
            element={
              <Venus
                planet={data[1].planet}
                image={data[1].planetSrc}
                imageStr={data[1].planeStructtSrc}
                imageSurf={data[1].planetSurfaceSrc}
                overview={data[1].overview}
                structure={data[1].structure}
                surface={data[1].surface}
                rotat={data[1].rotat}
                revol={data[1].revol}
                radius={data[1].radius}
                temp={data[1].temp}
              />
            }
          />
          <Route
            path="/earth"
            element={
              <Earth
                planet={data[2].planet}
                image={data[2].planetSrc}
                imageStr={data[2].planeStructtSrc}
                imageSurf={data[2].planetSurfaceSrc}
                overview={data[2].overview}
                structure={data[2].structure}
                surface={data[2].surface}
                rotat={data[2].rotat}
                revol={data[2].revol}
                radius={data[2].radius}
                temp={data[2].temp}
              />
            }
          />
          <Route
            path="/mars"
            element={
              <Mars
                planet={data[3].planet}
                image={data[3].planetSrc}
                imageStr={data[3].planeStructtSrc}
                imageSurf={data[3].planetSurfaceSrc}
                overview={data[3].overview}
                structure={data[3].structure}
                surface={data[3].surface}
                rotat={data[3].rotat}
                revol={data[3].revol}
                radius={data[3].radius}
                temp={data[3].temp}
              />
            }
          />
          <Route
            path="/jupiter"
            element={
              <Jupiter
                planet={data[4].planet}
                image={data[4].planetSrc}
                imageStr={data[4].planeStructtSrc}
                imageSurf={data[4].planetSurfaceSrc}
                overview={data[4].overview}
                structure={data[4].structure}
                surface={data[4].surface}
                rotat={data[4].rotat}
                revol={data[4].revol}
                radius={data[4].radius}
                temp={data[4].temp}
              />
            }
          />
          <Route
            path="/saturn"
            element={
              <Saturn
                planet={data[5].planet}
                image={data[5].planetSrc}
                imageStr={data[5].planeStructtSrc}
                imageSurf={data[5].planetSurfaceSrc}
                overview={data[5].overview}
                structure={data[5].structure}
                surface={data[5].surface}
                rotat={data[5].rotat}
                revol={data[5].revol}
                radius={data[5].radius}
                temp={data[5].temp}
              />
            }
          />
          <Route
            path="/uranus"
            element={
              <Uranus
                planet={data[6].planet}
                image={data[6].planetSrc}
                imageStr={data[6].planeStructtSrc}
                imageSurf={data[6].planetSurfaceSrc}
                overview={data[6].overview}
                structure={data[6].structure}
                surface={data[6].surface}
                rotat={data[6].rotat}
                revol={data[6].revol}
                radius={data[6].radius}
                temp={data[6].temp}
              />
            }
          />
          <Route
            path="/neptune"
            element={
              <Neptune
                planet={data[7].planet}
                image={data[7].planetSrc}
                imageStr={data[7].planeStructtSrc}
                imageSurf={data[7].planetSurfaceSrc}
                overview={data[7].overview}
                structure={data[7].structure}
                surface={data[7].surface}
                rotat={data[7].rotat}
                revol={data[7].revol}
                radius={data[7].radius}
                temp={data[7].temp}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
