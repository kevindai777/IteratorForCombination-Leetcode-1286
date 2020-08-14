//Objective is to design a class that takes a string and a combination length,
//and supports 2 methods: 'next' and 'hasNext'
//'next' will return the next lexicographically smallest combination
//'hasNext' will return if there is a next combination


//O(2^N * N) solution, where N is the length of the string
//We get all combinations of the characters of given length first,
//then sort and iterate through them

class CombinationIterator {
    constructor(characters, combinationLength) {
        let index = 0
        let temp = ''
        let result = []
        
        function backtrack(temp, index) {
            if (temp.length == combinationLength) {
                result.push(temp)
                return
            }
            
            for (let i = index; i < characters.length; i++) {
                temp += characters[i]
                backtrack(temp, i + 1)
                temp = temp.slice(0, temp.length - 1)
            }
        }
        backtrack(temp, index)
        
        this.iterate = result.sort((a,b) => a - b)
        this.index = 0
    }

    next() {
        return this.iterate[this.index++]
    }

    hasNext() {
        return this.iterate.length > this.index
    }
}

let iterator = new CombinationIterator('abc', 2)
iterator.next()
iterator.next()
iterator.next()