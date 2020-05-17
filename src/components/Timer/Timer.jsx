import React, { useState, useEffect, useCallback } from 'react';
import PauseIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { textToSpeech } from '../speech.helper';
import { getVoices } from '../speech.helper';
import Particles from 'react-particles-js';

import './timer.styles.scss';

export default function Timer(props) {
    const {
        runTime,
        alternate,
        isResting,
        precount,
        setPrecount,
        nextExercise,
        currentExercise,
        workoutInterval,
        isMuted,
        reset,
    } = props;

    const [isRunning, setIsRunning] = useState(false);
    // const [particleColor, setColor] = useState('white');
    const [seconds, setSeconds] = useState(0);
    const [voice1, setVoice1] = useState(null);
    const [voice2, setVoice2] = useState(null);

    const timeRemaining = runTime - seconds;

    const goPrecount = useCallback(() => {
        if (window.navigator.appVersion.includes('Edge')) {
            const current = currentExercise;
            if (!(precount < 4)) {
                textToSpeech(isMuted, `3, 2, 1, Go, ${current}`, voice1, 0.9);
            }
        } else {
            if (precount === 1) textToSpeech(isMuted, `Go. ${currentExercise}.`, voice1);
            else if (precount > 0) textToSpeech(isMuted, precount - 1 + '.', voice1);
        }

        setPrecount(precount - 1);
    }, [currentExercise, precount, setPrecount, isMuted, voice1]);

    const timeZero = useCallback(() => {
        if (nextExercise === null) {
            setIsRunning(false);
            setSeconds(seconds + 1); //timeremaining should be 0 after this. Triggers "great job"
            if (!window.navigator.userAgent.includes('Edge'))
                textToSpeech(isMuted, 'Great job.', voice2);
        } else {
            if (isResting && !window.navigator.userAgent.includes('Edge')) {
                textToSpeech(isMuted, `Go. ${nextExercise}.`, voice1);
            } else if (!window.navigator.userAgent.includes('Edge')) {
                textToSpeech(isMuted, `Rest. Next up, ${nextExercise.toLowerCase()}.`, voice2);
            }

            alternate();
            setSeconds(0);
        }
    }, [isResting, nextExercise, alternate, seconds, isMuted, voice1, voice2]);

    const timer = useCallback(() => {
        if (precount >= 0) {
            goPrecount();
            return;
        }

        if (runTime === 'stop') {
            stop();
            return;
        }

        if (
            !isResting &&
            currentExercise.toLowerCase() === 'step up onto chair' &&
            timeRemaining === Math.ceil(workoutInterval / 2) + 2
        ) {
            textToSpeech(isMuted, 'Switch sides.', voice1);
            setSeconds(seconds + 1);
            return;
        }

        if (timeRemaining <= 1) {
            timeZero();
            return;
        }

        if (timeRemaining === 7 && window.navigator.appVersion.includes('Edge')) {
            if (!isResting) {
                if (nextExercise) {
                    setTimeout(() => {
                        textToSpeech(
                            isMuted,
                            `5, 4, 3, 2, , , 1... Rest, Next Up, ${nextExercise}`,
                            voice1,
                            0.9
                        );
                    }, 700);
                }
            }
        }

        if (timeRemaining === 5 && window.navigator.appVersion.includes('Edge')) {
            if (isResting) {
                if (nextExercise) {
                    const next = nextExercise;
                    setTimeout(() => {
                        textToSpeech(isMuted, `3, 2, 1... Go, ${next}`, voice1, 0.9);
                    }, 700);
                }
            } else if (!nextExercise) {
                setTimeout(() => {
                    textToSpeech(isMuted, `3, 2, 1... Great Job.`, voice1, 0.9);
                }, 700);
            }
        }

        if (timeRemaining <= 6 && !window.navigator.appVersion.includes('Edge')) {
            if (!isResting) textToSpeech(isMuted, timeRemaining - 1 + '.', voice2);
            else if (timeRemaining <= 4) textToSpeech(isMuted, timeRemaining - 1 + '.', voice1);
        }

        setSeconds(seconds + 1);
    }, [
        seconds,
        currentExercise,
        runTime,
        timeRemaining,
        precount,
        workoutInterval,
        isResting,
        isMuted,
        goPrecount,
        timeZero,
        voice1,
        voice2,
        nextExercise,
    ]);

    // component did mount hook
    useEffect(() => {
        if (reset) {
            resetWorkout();
            return;
        }

        if (isRunning) {
            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
        }

        // Voice Init
        if (voice1 === null || voice2 === null) {
            // list of languages is probably not loaded, wait for it
            if (window.speechSynthesis.getVoices().length === 0) {
                window.speechSynthesis.addEventListener('voiceschanged', function () {
                    const voices = getVoices();
                    setVoice1(voices[0]);
                    setVoice2(voices[1]);
                    textToSpeech(isMuted, ' ', voice1);
                });
            } else {
                // languages list available, no need to wait
                const voices = getVoices();
                setVoice1(voices[0]);
                setVoice2(voices[1]);
                textToSpeech(isMuted, ' ', voice1);
            }
        }
    }, [isRunning, timer, reset, voice1, voice2, isMuted]);

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const resetWorkout = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const timerButtons = (
        <div className='icon-button'>
            {!isRunning ? (
                <PlayCircleFilledIcon fontSize='large' onClick={start} />
            ) : (
                <PauseIcon fontSize='large' onClick={stop} />
            )}
        </div>
    );

    const isWorkingOut =
        (timeRemaining === 0 && nextExercise !== null && isResting) ||
        (isRunning && !isResting && precount <= 0 && timeRemaining >= 1);

    return (
        <div style={{ display: 'flex' }}>
            <div
                className='timer-gradient-wrapper'
                style={
                    isWorkingOut
                        ? {
                              background:
                                  'linear-gradient(200deg, var(--highlight-color), var(--deeper-color))',
                              animation: 'flare 2s ease-in-out 0s alternate infinite',
                          }
                        : null
                }
            >
                <div className='timer-container'>
                    {precount >= 0 && isRunning ? (
                        precount === 0 ? (
                            <div className='timer-font'>GO{timerButtons}</div>
                        ) : precount <= 3 ? (
                            <div className='timer-font'>
                                {precount}
                                {timerButtons}
                            </div>
                        ) : reset ? (
                            <div className='timer-font'>
                                {timeRemaining}
                                {timerButtons}
                            </div>
                        ) : (
                            <div className='timer-fancy'>Let's go!</div>
                        ) //prevents flicker upon reset
                    ) : isNaN(runTime) ? (
                        <div className='timer-font'>0 {timerButtons}</div>
                    ) : timeRemaining !== 0 ? (
                        <div className='timer-font'>
                            {timeRemaining}
                            {timerButtons}
                        </div>
                    ) : nextExercise === null ? (
                        <div className='timer-fancy'>GREAT JOB!</div>
                    ) : isResting ? (
                        <div className='timer-font'>GO{timerButtons}</div>
                    ) : (
                        <div className='timer-font'>0{timerButtons}</div>
                    )}
                </div>
            </div>
            <Particles
                className='particles'
                params={{
                    backgroundMask: {
                        cover: {
                            color: {
                                value: {
                                    r: 40,
                                    g: 44,
                                    b: 52,
                                },
                            },
                            opacity: 1,
                        },
                        enable: true,
                    },
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                        line_linked: {
                            enable: true,
                            opacity: 0.06,
                            width: 1,
                            // color: {
                            //     value: 'rgba(255, 0, 0, 0)',
                            // },
                        },
                        move: {
                            direction: 'random',
                            speed: 0.5,
                        },
                        // color: {
                        //     value: 'rgba(255, 0, 0, 0)',
                        // },
                        size: {
                            value: 1.3,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.85,
                                opacity_max: 1,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onclick: {
                                enable: false,
                                mode: 'push',
                            },
                        },
                        modes: {
                            push: {
                                particles_nb: 1,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
        </div>
    );
}
