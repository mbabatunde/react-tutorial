import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, updateLocation] = useState("Seattle, WA");
    const [animal, updateAnimal] = useState("");
    const [breed, updateBreed] = useState("");
    const breeds = [];

    return (
        <div className="search-params">
            <input id="location"
                value={location}
                placeholder="Location"
                onChange={(e) => updateLocation(e.target.value)}
            />;
            <label htmlFor="animal">
                animal
                <select
                    id="animal"
                    value={animal}
                    onChange={(e) => updateAnimal(e.target.value)}
                    onBlue={(e) => updateAnimal(e.target.value)}
                >
                    <option />
                    {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                    ))}
                </select>
            </label>;
            <label htmlFor="breed">
                breed
                <select
                    disabled={!breeds.length}
                    id="breed"
                    value={breed}
                    onChange={(e) => updateBreed(e.target.value)}
                    onBlur={(e) => updateBreed(e.target.value)}
                >
                    <option />
                    {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                    </select>
            </label>;
        </div>
    )
};

export default SearchParams;
