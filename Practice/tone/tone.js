import * as Tone from "tone";

document.getElementById('c1').addEventListener('click',async () => {
  await Tone.Transport.start()
})

const drum = new Tone.MembraneSynth().toDestination();

new Tone.Loop(t => {
  drum.triggerAttackRelease("C1" ,"8n", t);
  drum.triggerAttackRelease("C1" ,"8n", t+0.5);
  drum.triggerAttackRelease("C1" ,"8n", t+1 );
  drum.triggerAttackRelease("C1" ,"8n", t+1.5);

},2).start(0)