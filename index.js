const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph)
{cats.push("Ralph")};

function destructivelyPrependCat(Bob)
{cats.unshift("Bob")};

function destructivelyRemoveLastCat(Garfield)
{cats.pop("Garfield")};

function destructivelyRemoveFirstCat(Milo)
{cats.shift("Milo")};

function appendCat(Broom)
{return [...cats, "Broom"];}

function prependCat(Arnold)
{return ["Arnold", ...cats]}

function removeLastCat(Garfield)
{return cats.slice(0, cats.length -1)};

function removeFirstCat(Milo)
{return cats.slice(1)};








