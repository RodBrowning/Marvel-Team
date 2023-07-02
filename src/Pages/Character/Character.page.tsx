import {
  BackButtonDiv,
  CharacterDiv,
  CharacterInfo,
  Comics,
  Description,
  ImageDiv,
} from './Character.styled'

import { BackButton } from '../../Components/buttons/backButton.styled'
import React from 'react'
import { RelatedWork } from '../../Components/relatedWork/relatedWork.styled'
import { SectionContainer } from '../../Components/sectionContainer/sectionContainer.styled'
import { SectionTitle } from '../../Components/titles/sectionTitle.styled'

const Character: React.FC = () => {
  return (
    <SectionContainer>
      <CharacterDiv>
        <CharacterInfo>
          <h1>Drax</h1>
          <Description>
            <h6>Description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus aut adipisci
              suscipit illo nesciunt laudantium officia deserunt fuga odio, ab at, quas quibusdam ut
              neque mollitia quod nemo sit consequatur illo nesciunt laudantium officia deserunt
              fuga odio, ab at, quas quibusdam ut neque mollitia quod nemo sit consequat.
            </p>
          </Description>
          <Comics>
            <h6>Comics</h6>
            <div>
              <img src="/assets/images/comic.png" alt="comic image" />
              <img src="/assets/images/comic.png" alt="comic image" />
              <img src="/assets/images/comic.png" alt="comic image" />
              <img src="/assets/images/comic.png" alt="comic image" />
            </div>
          </Comics>
        </CharacterInfo>
        <ImageDiv imgurl="/assets/images/heroimg.jpg">
          <img src="/assets/images/heroimg.jpg" alt="image" />
        </ImageDiv>
      </CharacterDiv>
      <RelatedWork>
        <div>
          <SectionTitle size="medium">Comics</SectionTitle>
          <a href="#1">A+Y (2012) #2</a>
          <a href="#2">Adam: Legend of the Blue Marvel (2008) #1</a>
          <a href="#3">Adam: Legend of the Blue Marvel (2008) #2</a>
          <a href="#4">Adam: Legend of the Blue Marvel (2008) #5</a>
          <a href="#5">Aero (2019) #11</a>
          <a href="#6">Aero (2019) #12</a>
          <a href="#7">Age of Heroes (2010) #1</a>
          <a href="#8">Age of Heroes (2010) #2</a>
          <a href="#9">Age of Heroes (2010) #3</a>
          <a href="#10">Age of Heroes (2010) #4</a>
          <a href="#11">Age of Innocence: The Rebirth of Iron Man (1996) #1</a>
          <a href="#12">Age of X: Universe (2011) #1</a>
          <a href="#13">Age of X: Universe (2011) #2</a>
          <a href="#14">All-New Iron Manual (2008) #1</a>
          <a href="#15">All-New, All-Different Avengers (2015) #10</a>
          <a href="#16">All-New, All-Different Avengers (2015) #11</a>
          <a href="#17">Alpha Flight (1983) #113</a>
          <a href="#18">Alpha Flight (1983) #127</a>
          <a href="#19">The Amazing Spider-Man (2017) #13</a>
        </div>
        <div>
          <SectionTitle size="medium">Series</SectionTitle>
          <a href="#20">Adam: Legend of the Blue Marvel (2008)</a>
          <a href="#21">Aero (2019 - 2020)</a>
          <a href="#22">Age of Heroes (2010)</a>
          <a href="#23">Age of Innocence: The Rebirth of Iron Man (1996)</a>
          <a href="#24">Age of X: Universe (2011)</a>
          <a href="#25">All-New Iron Manual (2008)</a>
          <a href="#26">All-New, All-Different Avengers (2015 - 2016)</a>
          <a href="#27">Alpha Flight (1983 - 1994)</a>
          <a href="#28">Amazing Spider-Man (1999 - 2013)</a>
          <a href="#29">Amazing Spider-Man Annual (1964 - 2018)</a>
          <a href="#30">AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)</a>
          <a href="#31">AMAZING SPIDER-MAN VOL. 6: HAPPY BIRTHDAY TPB (2004)</a>
          <a href="#32">Amazing Spider-Man: Worldwide Vol. 2 (2017)</a>
          <a href="#33">ANNIHILATION CLASSIC HC (2008)</a>
          <a href="#34">Annihilators: Earthfall (2011)</a>
          <a href="#35">Art of Marvel Studios TPB Slipcase (2011 - Present)</a>
          <a href="#36">Astonishing Spider-Man & Wolverine (2010 - 2011)</a>
          <a href="#37">Astonishing Tales (2009)</a>
          <a href="#38">Astonishing Tales: Iron Man 2020 Digital Comic (2009)</a>
        </div>
        <div>
          <SectionTitle size="medium">Events</SectionTitle>
          <a href="#39">Acts of Vengeance!</a>
          <a href="#40">Age of X</a>
          <a href="#41">Armor Wars</a>
          <a href="#42">Atlantis Attacks</a>
          <a href="#43">Avengers Disassembled</a>
          <a href="#44">Avengers VS X-Men</a>
          <a href="#45">Chaos War</a>
          <a href="#46">Civil War</a>
          <a href="#47">Crossing</a>
          <a href="#48">Dark Reign</a>
          <a href="#49">Enemy of the State</a>
          <a href="#50">Fatal Attractions</a>
          <a href="#51">Fear Itself</a>
          <a href="#52">House of M</a>
          <a href="#53">Infinity</a>
          <a href="#54">Infinity War</a>
          <a href="#55">Inhumanity</a>
          <a href="#56">Initiative</a>
          <a href="#57">Maximum Security</a>
          <a href="#58">Onslaught</a>
        </div>
      </RelatedWork>
      <BackButtonDiv>
        <BackButton href="#59">Back</BackButton>
      </BackButtonDiv>
    </SectionContainer>
  )
}

export default Character
