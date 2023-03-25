import React from 'react'
import { useRef } from 'react'
import Navbar from '../../components/navbar/Navbar';
import './Poems.css';

const Poems = () => {

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);



  const handleClick = (reference) => {
    reference.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className='content'> 
      {/* <h1>Poems</h1> */}
      <div className='sticky-nav'>
    <Navbar/>
    </div>
    <div className='page-content'>
    <div className='poem-choices'>
      {/* test text */}
      <button className='poem-btn' onClick={()=>handleClick(ref)}>Questions of Innocence</button>
      <button className='poem-btn' onClick={()=>handleClick(ref2)}>Funerals</button>
      <button className='poem-btn' onClick={()=>handleClick(ref3)}>The Murder of Crows</button>
    </div>
    <div className = "poem" ref={ref}>

<h2 className = "poem-header"> Questions of Innocence </h2>
<div className = "stanza">
<p className = "poem-line">I question the innocence of sleeping giants,</p>
<p className = "poem-line">lining themselves against sky riddled with color,</p>
<p className = "poem-line">reaching for the stratosphere as orange bleeds</p>
<p className = "poem-line">into blue bleeds into purple. Assiduously tucking</p>
<p className = "poem-line">themselves into curves, sharp edges forced by</p>
<p className = "poem-line">orogeny: folding, converging, compressing.</p>
</div>
<div className= "stanza">
<p className = "poem-line">Does humanity's misfortune plague giants' minds' too?</p>
<p className = "poem-line">Taking the form of Annosus root rot, entering</p>
<p className = "poem-line">fresh open wounds on stumps stained green and</p>
<p className = "poem-line">diminishing their crowns. Do they feel conifers fall,</p>
<p className = "poem-line">hear their anguished shouts? Or does ignorance equal</p>
<p className = "poem-line">bliss? Sleeping away day's shame under clouds' comfort.</p>
</div>
<div className = "stanza">
<p className = "poem-line">I question the innocence of sleeping giants.</p>
<p className = "poem-line">I question the innocence of myself.</p>
</div>

<div className = "poem" ref={ref2}>

<h2 className = "poem-header"> Funerals </h2>

<div className = "stanza">
<p className = "poem-line">On my way to the funeral, I sit in the backseat driver's side, like I always do.</p>
<p className = "poem-line">People funnel through towering doors.</p>
<p className = "poem-line">Familiar faces melt into smeared glass, fragile and foggy.</p>
</div>

<div className = "stanza">
<p className = "poem-line">Option one: view the body.</p>
<p className = "poem-line">Option two: sit down.</p>
</div>

<div className = "stanza">
<p className = "poem-line">I take my place, imagine it as the backseat, passenger's side.</p>
<p className = "poem-line">Music plays, the smeared glass speaks and shatters. I'm uncomfortable,</p>
<p className = "poem-line">but only uncomfortable. Gazing about the room, no one dares meet my eyes </p>
<p className = "poem-line">afraid of turning into stone, and my mind fills with laughter. The. End–</p>
</div>

<div className = "stanza">
<p className = "poem-line">I stupidly ask someone how they're doing. I want them to ask me, too.</p>
<p className = "poem-line">I'd answer, "I'm fine." And I'd mean it. </p>
<p className = "poem-line">I'm back in the car, backseat driver's side, comfortably.</p>
<p className = "poem-line">Tomorrow I'll drive somewhere, and sit in the driver's seat.</p>
</div>
</div>





<div className = "poem" ref={ref3}>
<h2 className = "poem-header"> The Murder of Crows </h2>

<div className = "stanza">
<p className = "poem-line">There is a murder of crows,</p>
<p className = "poem-line">berating and condemning me</p>
<p className = "poem-line">from the bare schoolyard</p> 
<p className = "poem-line">behind our house.</p> 
<p className = "poem-line">I lavish in the absence of sound</p>
<p className = "poem-line">beaks glued shut before unlatching the gate</p>
<p className = "poem-line">the bright twinkling of metal,</p>
<p className = "poem-line">clashing against metal</p>
<p className = "poem-line">must have signaled their caterwauling.</p>
<p className = "poem-line">The symphony of caws </p>
<p className = "poem-line">and laughter </p>
<p className = "poem-line">and gossiping </p>
<p className = "poem-line">of these inked black birds,</p>
<p className = "poem-line">reminded me of another</p>
<p className = "poem-line">earache inducing shrillness,</p>
<p className = "poem-line">another squalling voice.</p>
<p className = "poem-line">One that has since been silenced</p>
<p className = "poem-line">thankfully–</p>
<p className = "poem-line">You don't know about that.</p>
<p className = "poem-line">You never will.</p>
<p className = "poem-line">I pine over the thought,</p>
<p className = "poem-line">to be like these crows</p>
<p className = "poem-line">croaking loudly, </p>
<p className = "poem-line">vehemently</p>
<p className = "poem-line">when you ask the question,</p>
<p className = "poem-line">"Why did you hate him so much?"</p>
<p className = "poem-line">But unlike these shadowed crows,</p>
<p className = "poem-line">that twinkling metal, </p>
<p className = "poem-line">against metal,</p>
<p className = "poem-line">is my signal</p>
<p className = "poem-line">For Silence.</p>
</div>
</div>

</div>
</div>
</div>
  )
}

export default Poems;