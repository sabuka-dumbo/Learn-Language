const start_button = document.getElementById("start_button");
let score = 0;
let test_count = 0;
let word = "";

if (window.location.pathname === "/listening_test/") {
    start_test();
} else if (window.location.pathname === "/word_test/") {
    start_test2();
} else if (window.location.pathname === "/translate_test/") {
    start_test6();
}

function start_test() {
    const start_div = document.getElementById("start-div");

    start_div.style.display = "block";
    start_div.style.animation = "start_test 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "100%";
    })
}

function start_test2() {
    const start_div = document.getElementById("start-div2");

    start_div.style.display = "block";
    start_div.style.animation = "start_test 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "100%";
    })
}

function start_test3() {
    const start_div = document.getElementById("start-div");
    const listening_test_div = document.getElementById("test-variant-1");

    start_div.style.animation = "start_test2 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "0%";
        start_div.style.display = "none";

        listening_test_div.style.animation = "start_test 1.5s ease";
        listening_test_div.style.display = "block";

        listening_test_div.addEventListener("animationend", function() {
            listening_test_div.style.animation = '';
        })
    })
    
    fetch("/get_word2/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ }),
    })
    .then(response => response.json())
    .then(data => {
        word = data.word;
        console.log(word)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function play_sound() {
    var utterance = new SpeechSynthesisUtterance(word);

    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');
    speechSynthesis.speak(utterance);

    const play_sound_icon = document.getElementById("test-div-play");
    const play_sound_icon2 = document.getElementById("test-div-play2");

    play_sound_icon2.style.display = "inline-block";
    play_sound_icon.style.display = "none";

    utterance.onend = function(event) {
        play_sound_icon.style.display = "inline-block";
        play_sound_icon2.style.display = "none";
    };
}

function next_test_variant_1() {
    const textarea = document.getElementById("test-speech-textarea");
    if (test_count == 4) {
        fetch("/check_test1/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "word": textarea.value,
                "main_word": word,
            }),
        })
        .then(response => response.json())
        .then(data => {
            score += data.right_perc;
            console.log(score)
            test_count += 1;
            new_score3 = Math.ceil(score / 10)

            fetch("/save_points/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "points": Math.ceil(score / 10), "test_points": test_count * 10 }),
            })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });

        const test_div1 = document.getElementById("test-variant-1");
        const results_div2 = document.getElementById("results-div");
        const results_header2_2 = document.getElementById("results-header2");

        test_div1.style.animation = "start_test2 1s ease";


        test_div1.addEventListener("animationend", function() {
            test_div1.style.display = "none";
            test_div1.style.animation = '';

            results_header2_2.innerText = new_score3 + "/" + test_count * 10 + "P";
        })

        setTimeout(function() {
            results_div2.style.animation = "start_div 1s ease";
            results_div2.style.display = "block";

            results_div2.addEventListener("animationend", function() {
                results_div2.style.animation = '';
                results_div2.style.display = "block";
            })
        }, 1500)

    } else {
        if (textarea.value == '') {
            const warning_div = document.getElementById("warning");
            const warning_text = document.getElementById("warning-text");
            
            warning_div.style.display = 'block';
            warning_div.style.animation = 'warning-animation 1s ease';
            warning_text.innerText = "Please fill in all the fields above";
            
            warning_div.addEventListener("animationend", function() {
                warning_div.style.animation = '';
                warning_div.style.display = "block";
                
                setTimeout(function() {
                    warning_div.style.animation = 'warning-animation2 2s ease';
            
                    warning_div.addEventListener("animationend", function() {
                        warning_div.style.animation = '';
                        warning_div.style.display = "none";
                    });
                }, 1500);
            });
        } else {
            fetch("/check_test1/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    "word": textarea.value,
                    "main_word": word,
                }),
            })
            .then(response => response.json())
            .then(data => {
                score += data.right_perc;
                test_count += 1;
            })
            .catch(error => {
                console.error('Error:', error);
            });

            fetch("/get_word2/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ }),
            })
            .then(response => response.json())
            .then(data => {
                word = data.word;
                console.log(word)
            })
            .catch(error => {
                console.error('Error:', error);
            });

            const test_div1 = document.getElementById("test-variant-1");
            const textarea2 = document.getElementById("test-speech-textarea");

            test_div1.style.animation = "start_test2 1s ease";
            
            test_div1.addEventListener("animationend", function() {
                test_div1.style.animation = '';
                test_div1.style.display = "none"
                textarea2.value = '';
            })

            setTimeout(function() {
                test_div1.style.animation = "start_test 1s ease";
                test_div1.style.display = "block";

                test_div1.addEventListener("animationend", function() {
                    test_div1.style.animation = '';
                    test_div1.style.display = "block";
                })
            }, 1500)
        }
    }
}

function start_test4() {
    const start_div = document.getElementById("start-div2");
    const word_test_div = document.getElementById("test-variant-3");

    start_div.style.animation = "start_test2 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "0%";
        start_div.style.display = "none";

        word_test_div.style.animation = "start_test 1.5s ease";
        word_test_div.style.display = "block";

        word_test_div.addEventListener("animationend", function() {
            word_test_div.style.animation = '';
        })
    })

    fetch("/get_word2/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ }),
    })
    .then(response => response.json())
    .then(data => {
        let word = data.word;
        const main_word = document.getElementById("main_word");
        const question_in_div = document.getElementById("test-div-question");

        question_in_div.innerText = "Write the word '" + word + "':";
        main_word.value = word;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function start_test5() {
    const start_div = document.getElementById("start-div3");
    const word_test_div = document.getElementById("test-variant-2");

    start_div.style.animation = "start_test2 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "0%";
        start_div.style.display = "none";

        word_test_div.style.animation = "start_test 1.5s ease";
        word_test_div.style.display = "block";

        word_test_div.addEventListener("animationend", function() {
            word_test_div.style.animation = '';
        })
    })
}

function start_test6() {
    const start_div = document.getElementById("start-div3");

    start_div.style.display = "block";
    start_div.style.animation = "start_test 1.5s ease";

    start_div.addEventListener("animationend", function() {
        start_div.style.animation = '';
        start_div.style.opacity = "100%";
    })

    fetch("/get_word2/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ }),
    })
    .then(response => response.json())
    .then(data => {
        let word = data.word;
        const question_in_div2 = document.getElementById("test-div-question2");

        question_in_div2.innerText = "Translate the word '" + word + "' in Georgian:";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function next_test_variant_2() {
    const textarea3 = document.getElementById("textarea-variant2"); 

    if (textarea3 == '') {
        const warning_div = document.getElementById("warning");
        const warning_text = document.getElementById("warning-text");
        
        warning_div.style.display = 'block';
        warning_div.style.animation = 'warning-animation 1s ease';
        warning_text.innerText = "Please fill in all the fields above";
        
        warning_div.addEventListener("animationend", function() {
            warning_div.style.animation = '';
            warning_div.style.display = "block";
            
            setTimeout(function() {
                warning_div.style.animation = 'warning-animation2 2s ease';
        
                warning_div.addEventListener("animationend", function() {
                    warning_div.style.animation = '';
                    warning_div.style.display = "none";
                });
            }, 1500);
        });
    } else {

    }
}

function next_test_variant_3() {
    if (test_count == 4) {
        fetch("/check_test3/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "word_field1": word_field1.value,
                "word_field2": word_field2.value,
                "word_field3": word_field3.value,
                "word_field4": word_field4.value,
                "word_field5": word_field5.value,
                "main_word": main_word.value,
            }),
        })
        .then(response => response.json())
        .then(data => {
            const results_div = document.getElementById("results-div");
            const results_header2 = document.getElementById("results-header2");
            const test_div2 = document.getElementById("test-variant-3");

            score += data.right_perc;
            test_count += 1;
            new_score = Math.ceil(score / 10)

            test_div2.style.animation = "start_test2 1s ease";

            test_div2.addEventListener("animationend", function() {
                test_div2.style.animation = '';
                test_div2.style.display = "none";
                results_header2.innerText = new_score + "/" + test_count * 10 + "P";

                results_div.style.display = "block";
                results_div.style.animation = "start_test 1s ease";

                results_div.addEventListener("animationend", function() {
                    results_div.style.animation = '';
                    results_div.style.display = "block";
                })
            })

            fetch("/save_points/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "points": Math.ceil(score / 10), "test_points": test_count * 10 }),
            })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        const word_field1 = document.getElementById("word_field1");
        const word_field2 = document.getElementById("word_field2");
        const word_field3 = document.getElementById("word_field3");
        const word_field4 = document.getElementById("word_field4");
        const word_field5 = document.getElementById("word_field5");
        const main_word = document.getElementById("main_word");

        if (word_field1.value == '' || word_field2.value == '' || word_field3.value == '' || word_field4.value == '' || word_field5.value == '') {
            const warning_div = document.getElementById("warning");
            const warning_text = document.getElementById("warning-text");
            
            warning_div.style.display = 'block';
            warning_div.style.animation = 'warning-animation 1s ease';
            warning_text.innerText = "Please fill in all the fields above";
            
            warning_div.addEventListener("animationend", function() {
                warning_div.style.animation = '';
                warning_div.style.display = "block";
                
                setTimeout(function() {
                    warning_div.style.animation = 'warning-animation2 2s ease';
            
                    warning_div.addEventListener("animationend", function() {
                        warning_div.style.animation = '';
                        warning_div.style.display = "none";
                    });
                }, 1500);
            });
        } else {
            fetch("/check_test3/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    "word_field1": word_field1.value,
                    "word_field2": word_field2.value,
                    "word_field3": word_field3.value,
                    "word_field4": word_field4.value,
                    "word_field5": word_field5.value,
                    "main_word": main_word.value,
                }),
            })
            .then(response => response.json())
            .then(data => {
                score += data.right_perc;
                test_count += 1;
            })
            .catch(error => {
                console.error('Error:', error);
            });

            const test_div = document.getElementById("test-variant-3");

            test_div.style.animation = 'start_test2 ease 1s';
            word_field1.value = '';
            word_field2.value = '';
            word_field3.value = '';
            word_field4.value = '';
            word_field5.value = '';

            setTimeout(function() {
                fetch("/get_word2/", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ }),
                })
                .then(response => response.json())
                .then(data => {
                    let word = data.word;
                    const main_word = document.getElementById("main_word");
                    const question_in_div = document.getElementById("test-div-question");
            
                    question_in_div.innerText = "Write the word '" + word + "':";
                    main_word.value = word;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }, 1000)

            test_div.addEventListener("animationend", function() {
                test_div.style.animation = "start_test ease 1s";

                test_div.addEventListener("animationend", function() {
                    test_div.style.animation = '';
                })
            })
        }
    }
}