// export const stringFrequencies = {
//     e: [329.6276, 349.2282, 369.9944, 391.9954, 415.3047, 440.0000, 466.1638, 493.8833, 523.2511, 554.3653, 587.3295, 622.2540, 659.2551, 698.4565, 739.9888, 783.9909, 830.6094, 880.0000, 932.3275, 987.7666, 1046.502, 1108.731, 1174.659],
//     B: [246.9417, 261.6256, 277.1826, 293.6648, 311.1270, 329.6276, 349.2282, 369.9944, 391.9954, 415.3047, 440.0000, 466.1638, 493.8833, 523.2511, 554.3653, 587.3295, 622.2540, 659.2551, 698.4565, 739.9888, 783.9909, 830.6094, 880.0000],
//     G: [195.9977, 207.6523, 220.0000, 233.0819, 246.9417, 261.6256, 277.1826, 293.6648, 311.1270, 329.6276, 349.2282, 369.9944, 415.3047, 440.0000, 466.1638, 493.8833, 523.2511, 554.3653, 622.2540, 659.2551, 698.4565, 739.9888, 783.9909],
//     D: [146.8324, 155.5635, 164.8138, 174.6141, 184.9972, 195.9977, 207.6523, 220.0000, 233.0819, 246.9417, 261.6256, 277.1826, 293.6648, 311.1270, 329.6276, 349.2282, 369.9944, 391.9954, 415.3047, 440.0000, 466.1638, 493.8833, 523.2511],
//     A: [110.0000, 116.5409, 123.4708, 130.8128, 138.5913, 146.8324, 155.5635, 164.8138, 174.6141, 184.9972, 195.9977, 207.6523, 220.0000, 233.0819, 246.9417, 261.6256, 277.1826, 293.6648, 311.1270, 329.6276, 349.2282, 369.9944, 391.9954],
//     E: [82.40689, 87.30706, 92.49861, 97.99886, 103.8262, 110.0000, 116.5409, 123.4708, 130.8128, 138.5913, 146.8324, 155.5635, 164.8138, 174.6141, 184.9972, 195.9977, 207.6523, 220.0000, 233.0819, 246.9417, 261.6256, 277.1826 ,293.6648],
// }

// export const stringNotes: { [key in strings]: string[][] } = {
//     e: [['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D']],
//     B: [['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G']],
//     G: [['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F']],
//     D: [['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb']],
//     A: [['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'],],
//     E: [['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B'], ['C'], ['C#', 'Db'], ['D']],
// }
export interface NoteInterface {
    note: string[],
    frequency: number
}

export const notes: { [key in strings]:  NoteInterface[]} = {
    e: [
        {
          "note": [
            "E"
          ],
          "frequency": 329.6276
        },
        {
          "note": [
            "F"
          ],
          "frequency": 349.2282
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 369.9944
        },
        {
          "note": [
            "G"
          ],
          "frequency": 391.9954
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 415.3047
        },
        {
          "note": [
            "A"
          ],
          "frequency": 440
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 466.1638
        },
        {
          "note": [
            "B"
          ],
          "frequency": 493.8833
        },
        {
          "note": [
            "C"
          ],
          "frequency": 523.2511
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 554.3653
        },
        {
          "note": [
            "D"
          ],
          "frequency": 587.3295
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 622.254
        },
        {
          "note": [
            "E"
          ],
          "frequency": 659.2551
        },
        {
          "note": [
            "F"
          ],
          "frequency": 698.4565
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 739.9888
        },
        {
          "note": [
            "G"
          ],
          "frequency": 783.9909
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 830.6094
        },
        {
          "note": [
            "A"
          ],
          "frequency": 880
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 932.3275
        },
        {
          "note": [
            "B"
          ],
          "frequency": 987.7666
        },
        {
          "note": [
            "C"
          ],
          "frequency": 1046.502
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 1108.731
        },
        {
          "note": [
            "D"
          ],
          "frequency": 1174.659
        }
      ],
    B: [
        {
          "note": [
            "B"
          ],
          "frequency": 246.9417
        },
        {
          "note": [
            "C"
          ],
          "frequency": 261.6256
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 277.1826
        },
        {
          "note": [
            "D"
          ],
          "frequency": 293.6648
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 311.127
        },
        {
          "note": [
            "E"
          ],
          "frequency": 329.6276
        },
        {
          "note": [
            "F"
          ],
          "frequency": 349.2282
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 369.9944
        },
        {
          "note": [
            "G"
          ],
          "frequency": 391.9954
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 415.3047
        },
        {
          "note": [
            "A"
          ],
          "frequency": 440
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 466.1638
        },
        {
          "note": [
            "B"
          ],
          "frequency": 493.8833
        },
        {
          "note": [
            "C"
          ],
          "frequency": 523.2511
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 554.3653
        },
        {
          "note": [
            "D"
          ],
          "frequency": 587.3295
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 622.254
        },
        {
          "note": [
            "D"
          ],
          "frequency": 659.2551
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 698.4565
        },
        {
          "note": [
            "E"
          ],
          "frequency": 739.9888
        },
        {
          "note": [
            "F"
          ],
          "frequency": 783.9909
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 830.6094
        },
        {
          "note": [
            "G"
          ],
          "frequency": 880
        }
      ],
      G: [
        {
          "note": [
            "G"
          ],
          "frequency": 195.9977
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 207.6523
        },
        {
          "note": [
            "A"
          ],
          "frequency": 220
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 233.0819
        },
        {
          "note": [
            "B"
          ],
          "frequency": 246.9417
        },
        {
          "note": [
            "C"
          ],
          "frequency": 261.6256
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 277.1826
        },
        {
          "note": [
            "D"
          ],
          "frequency": 293.6648
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 311.127
        },
        {
          "note": [
            "E"
          ],
          "frequency": 329.6276
        },
        {
          "note": [
            "F"
          ],
          "frequency": 349.2282
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 369.9944
        },
        {
          "note": [
            "G"
          ],
          "frequency": 415.3047
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 440
        },
        {
          "note": [
            "A"
          ],
          "frequency": 466.1638
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 493.8833
        },
        {
          "note": [
            "B"
          ],
          "frequency": 523.2511
        },
        {
          "note": [
            "C"
          ],
          "frequency": 554.3653
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 622.254
        },
        {
          "note": [
            "D"
          ],
          "frequency": 659.2551
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 698.4565
        },
        {
          "note": [
            "E"
          ],
          "frequency": 739.9888
        },
        {
          "note": [
            "F"
          ],
          "frequency": 783.9909
        }
      ],
      D: [
        {
          "note": [
            "D"
          ],
          "frequency": 146.8324
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 155.5635
        },
        {
          "note": [
            "E"
          ],
          "frequency": 164.8138
        },
        {
          "note": [
            "F"
          ],
          "frequency": 174.6141
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 184.9972
        },
        {
          "note": [
            "G"
          ],
          "frequency": 195.9977
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 207.6523
        },
        {
          "note": [
            "A"
          ],
          "frequency": 220
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 233.0819
        },
        {
          "note": [
            "B"
          ],
          "frequency": 246.9417
        },
        {
          "note": [
            "C"
          ],
          "frequency": 261.6256
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 277.1826
        },
        {
          "note": [
            "D"
          ],
          "frequency": 293.6648
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 311.127
        },
        {
          "note": [
            "D"
          ],
          "frequency": 329.6276
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 349.2282
        },
        {
          "note": [
            "E"
          ],
          "frequency": 369.9944
        },
        {
          "note": [
            "F"
          ],
          "frequency": 391.9954
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 415.3047
        },
        {
          "note": [
            "G"
          ],
          "frequency": 440
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 466.1638
        },
        {
          "note": [
            "A"
          ],
          "frequency": 493.8833
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 523.2511
        }
      ],
      A: [
        {
          "note": [
            "A"
          ],
          "frequency": 110
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 116.5409
        },
        {
          "note": [
            "B"
          ],
          "frequency": 123.4708
        },
        {
          "note": [
            "C"
          ],
          "frequency": 130.8128
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 138.5913
        },
        {
          "note": [
            "D"
          ],
          "frequency": 146.8324
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 155.5635
        },
        {
          "note": [
            "E"
          ],
          "frequency": 164.8138
        },
        {
          "note": [
            "F"
          ],
          "frequency": 174.6141
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 184.9972
        },
        {
          "note": [
            "G"
          ],
          "frequency": 195.9977
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 207.6523
        },
        {
          "note": [
            "A"
          ],
          "frequency": 220
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 233.0819
        },
        {
          "note": [
            "B"
          ],
          "frequency": 246.9417
        },
        {
          "note": [
            "C"
          ],
          "frequency": 261.6256
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 277.1826
        },
        {
          "note": [
            "D"
          ],
          "frequency": 293.6648
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 311.127
        },
        {
          "note": [
            "E"
          ],
          "frequency": 329.6276
        },
        {
          "note": [
            "F"
          ],
          "frequency": 349.2282
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 369.9944
        },
        {
          "note": [
            "G"
          ],
          "frequency": 391.9954
        }
      ],
      E: [
        {
          "note": [
            "E"
          ],
          "frequency": 82.40689
        },
        {
          "note": [
            "F"
          ],
          "frequency": 87.30706
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 92.49861
        },
        {
          "note": [
            "G"
          ],
          "frequency": 97.99886
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 103.8262
        },
        {
          "note": [
            "A"
          ],
          "frequency": 110
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 116.5409
        },
        {
          "note": [
            "B"
          ],
          "frequency": 123.4708
        },
        {
          "note": [
            "C"
          ],
          "frequency": 130.8128
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 138.5913
        },
        {
          "note": [
            "D"
          ],
          "frequency": 146.8324
        },
        {
          "note": [
            "D#",
            "Eb"
          ],
          "frequency": 155.5635
        },
        {
          "note": [
            "E"
          ],
          "frequency": 164.8138
        },
        {
          "note": [
            "F"
          ],
          "frequency": 174.6141
        },
        {
          "note": [
            "F#",
            "Gb"
          ],
          "frequency": 184.9972
        },
        {
          "note": [
            "G"
          ],
          "frequency": 195.9977
        },
        {
          "note": [
            "G#",
            "Ab"
          ],
          "frequency": 207.6523
        },
        {
          "note": [
            "A"
          ],
          "frequency": 220
        },
        {
          "note": [
            "A#",
            "Bb"
          ],
          "frequency": 233.0819
        },
        {
          "note": [
            "B"
          ],
          "frequency": 246.9417
        },
        {
          "note": [
            "C"
          ],
          "frequency": 261.6256
        },
        {
          "note": [
            "C#",
            "Db"
          ],
          "frequency": 277.1826
        },
        {
          "note": [
            "D"
          ],
          "frequency": 293.6648
        }
      ]
}

export const stringArray: Array<strings> = [
    'e', 'B', 'G', 'D', 'A', 'E'
]

export type strings = 'e' | 'B' | 'G' | 'D' | 'A' | 'E';// export const notes = [

    
   