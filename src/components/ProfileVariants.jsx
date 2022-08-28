import { useSetAtom, useAtomValue } from "jotai";
import { mortySlapsAtom, rickSlapsAtom } from "../globalState";
export const Profile2 = () => {
  const setMortySlaps = useSetAtom(mortySlapsAtom);
  const rickSlaps = useAtomValue(rickSlapsAtom);
  // const [rickSlaps, setRickSlaps] = useAtom(rickSlapsAtom); not best practice...
  //try this trick instead!
  return (
    <div>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt=""
      />
      <div>YOU WERE SLAPPED {rickSlaps} TIMES</div>
      <button onClick={() => setMortySlaps((s) => s + 1)} className="btn">
        SLAP MORTY
      </button>
    </div>
  );
};

export const Profile = () => {
  const mortySlaps = useAtomValue(mortySlapsAtom);
  // const [rickSlaps, setRickSlaps] = useAtom(rickSlapsAtom); not best practice...
  //try this trick instead!
  const setRickSlaps = useSetAtom(rickSlapsAtom);
  return (
    <div>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt=""
      />
      <div>YOU WERE SLAPPED {mortySlaps} TIMES</div>
      <button
        onClick={() => setRickSlaps((slaps) => slaps + 1)}
        className="btn"
      >
        SLAP RICK
      </button>
    </div>
  );
};
