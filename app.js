const quiz=[
    {
        "question": "What is the correct method to add a key-value pair to a dictionary?",
        "options": [
            {"a": "dict.add(key, value)", "b": "dict[key] = value", "c": "dict.append(key, value)", "d": "dict.insert(key, value)"}
        ],
        "answer": "dict[key] = value"
    },
    {
        "question": "Which method is used to retrieve a value from a dictionary with a default value?",
        "options": [
            {"a": "dict.fetch(key, default)", "b": "dict.get(key, default)", "c": "dict.retrieve(key, default)", "d": "dict.find(key, default)"}
        ],
        "answer": "dict.get(key, default)"
    },
    {
        "question": "What is the correct way to delete a key-value pair from a dictionary?",
        "options": [
            {"a": "del dict[key]", "b": "dict.remove(key)", "c": "dict.delete(key)", "d": "dict.popitem(key)"}
        ],
        "answer": "del dict[key]"
    },
    {
        "question": "Which method returns all keys in a dictionary?",
        "options": [
            {"a": "dict.keys()", "b": "dict.get_keys()", "c": "dict.all_keys()", "d": "dict.list_keys()"}
        ],
        "answer": "dict.keys()"
    },
    {
        "question": "How do you create an empty dictionary?",
        "options": [
            {"a": "dict = {}", "b": "dict = []", "c": "dict = ()", "d": "dict = empty"}
        ],
        "answer": "dict = {}"
    },
    {
        "question": "What happens if you try to access a non-existent key in a dictionary?",
        "options": [
            {"a": "Returns None", "b": "Throws a KeyError", "c": "Returns 0", "d": "Creates a new key"}
        ],
        "answer": "Throws a KeyError"
    },
    {
        "question": "Which method can be used to merge two dictionaries in Python 3.9+?",
        "options": [
            {"a": "dict.update()", "b": "dict.merge()", "c": "dict1 | dict2", "d": "dict.add(dict2)"}
        ],
        "answer": "dict1 | dict2"
    },
    {
        "question": "Which of these is immutable in Python?",
        "options": [
            {"a": "List", "b": "Dictionary", "c": "Tuple", "d": "Set"}
        ],
        "answer": "Tuple"
    },
    {
        "question": "How do you check if a key exists in a dictionary?",
        "options": [
            {"a": "if dict.key", "b": "if key in dict", "c": "if key in dict.keys()", "d": "if key exist in dict"}
        ],
        "answer": "if key in dict"
    },
    {
        "question": "Which method removes a key and returns its value?",
        "options": [
            {"a": "dict.remove()", "b": "dict.pop()", "c": "dict.delete()", "d": "dict.extract()"}
        ],
        "answer": "dict.pop()"
    },
    {
        "question": "Which method returns all the values in a dictionary?",
        "options": [
            {"a": "dict.values()", "b": "dict.all()", "c": "dict.get_all_values()", "d": "dict.fetch_values()"}
        ],
        "answer": "dict.values()"
    },
    {
        "question": "What is the default return value of the get() method if the key does not exist?",
        "options": [
            {"a": "0", "b": "None", "c": "KeyError", "d": "False"}
        ],
        "answer": "None"
    },
    {
        "question": "What is the correct syntax for a set in Python?",
        "options": [
            {"a": "{1, 2, 3}", "b": "[1, 2, 3]", "c": "(1, 2, 3)", "d": "{1: 'a', 2: 'b', 3: 'c'}"}
        ],
        "answer": "{1, 2, 3}"
    },
    {
        "question": "How do you find the number of elements in a dictionary?",
        "options": [
            {"a": "len(dict)", "b": "dict.size()", "c": "dict.count()", "d": "dict.length()"}
        ],
        "answer": "len(dict)"
    },
    {
        "question": "What is the output of list({1: 'a', 2: 'b'})?",
        "options": [
            {"a": "[1, 2, 'a', 'b']", "b": "[1, 2]", "c": "[('a', 1), ('b', 2)]", "d": "[('1', 'a'), ('2', 'b')]"}
        ],
        "answer": "[1, 2]"
    },
    {
        "question": "Which of the following can be used as dictionary keys?",
        "options": [
            {"a": "Lists", "b": "Dictionaries", "c": "Tuples", "d": "Sets"}
        ],
        "answer": "Tuples"
    },
    {
        "question": "What does the clear() method do for a dictionary?",
        "options": [
            {"a": "Removes all keys", "b": "Removes all key-value pairs", "c": "Deletes the dictionary", "d": "Deletes a specific key"}
        ],
        "answer": "Removes all key-value pairs"
    },
    {
        "question": "What is the result of {'a': 1, 'b': 2}['c']?",
        "options": [
            {"a": "None", "b": "0", "c": "KeyError", "d": "False"}
        ],
        "answer": "KeyError"
    },
    {
        "question": "How can you iterate through a dictionary's values only?",
        "options": [
            {"a": "for value in dict.values()", "b": "for value in dict.keys()", "c": "for value in dict.items()", "d": "for value in dict.get_values()"}
        ],
        "answer": "for value in dict.values()"
    },
    {
        "question": "Which method removes and returns an arbitrary key-value pair?",
        "options": [
            {"a": "dict.pop()", "b": "dict.popitem()", "c": "dict.remove()", "d": "dict.del()"}
        ],
        "answer": "dict.popitem()"
    }
]
// ? jira nedi jobsearch
for(let i=0;i<quiz.length;i++){
    let sual = document.createElement("h2")
    let variant = document.createElement("span")
    sual.textContent=quiz[i].question
    suallar.appendChild(sual)
    suallar.appendChild(variant)
    for(let j=0;j<4;j++){
        const elifba =["a","b","c","d"]
        let elif =elifba[j]
        console.log(elif)
        let inp = document.createElement("input")
        let lab = document.createElement("label")
        variant.appendChild(inp)
        variant.appendChild(lab)
        inp.type="radio"
        inp.name=`varian${i}`
        lab.id=`var_${i}_${j}`
        lab.innerHTML=quiz[i].options[0][elif]
    }
}
        // variant.innerHTML=`
        //     <input type="radio" id="varia" name="varian" value="dsds" />
        //     <label for="varia" id="var_1"></label>
        //     <input type="radio" id="varia" name="varian" value="dsds" />
        //     <label for="varia" id="var_2"></label>
        //     <input type="radio" id="varia" name="varian" value="dsds" />
        //     <label for="varia" id="var_3"></label>
        //     <input type="radio" id="varia" name="varian" value="dsds" />
        //     <label for="varia" id="var_4"></label>
        // `
        // var_1.innerHTML = quiz[i].options[0].a
        // var_2.innerHTML = quiz[i].options[0].b
        // var_3.innerHTML = quiz[i].options[0].c
        // var_4.innerHTML = quiz[i].options[0].d
// function Test(){
//     console.log("sdfgsd")
// }
// ()=>{
//     console.log("trrfasd")
// }
// ! muelimin yolldagi 132ci setirde olan bir bir cixir hansi boyukduse onu verir dovre girir