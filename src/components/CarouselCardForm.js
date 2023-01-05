import {useState} from "react";

export default function CarouselCardForm({formId}) {
    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSetsChange(event) {
        setSets(event.target.value);
    }

    function handleRepsChange(event) {
        setReps(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true);
    }

    return (
        <>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-1 gap-2 mb -2">
                        <div className="flex">
                            <label htmlFor="name" className="font-bold mr-2">
                                Name:
                            </label>
                            <input
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                className="rounded-sm w-32"
                            />
                        </div>
                        <div className="flex">
                            <label htmlFor="sets" className="font-bold mr-2">
                                Sets:
                            </label>
                            <input
                                id="sets"
                                value={sets}
                                onChange={handleSetsChange}
                                className="rounded-sm w-9"
                            />
                        </div>
                        <div className="flex">
                            <label htmlFor="reps" className="font-bold mr-2">
                                Reps:
                            </label>
                            <input
                                id="reps"
                                value={reps}
                                onChange={handleRepsChange}
                                className="rounded-sm w-12"
                            />
                        </div>
                    </div>
                    <div className="flex grow-0 justify-end">
                        <button
                            type="submit"
                            className="ml-5 rounded-md bg-white px-2.5 py-0.5 text-stone-900 border border-stone-900 shadow font-semibold transition-colors duration-300 transform hover:bg-stone-100 active:bg-stone-200"
                        >
                            Save
                        </button>
                    </div>
                </form>
            ) : (
                 <div className="flex gap-12">
                     <span><b>Name</b>: {name}</span>
                     <span><b>Sets</b>: {sets}</span>
                     <span><b>Reps</b>: {reps}</span>
                 </div>
             )}
        </>
    );
}
