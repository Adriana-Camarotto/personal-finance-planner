import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
    const containerRef = useRef(null), [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    const particlesLoaded = useCallback(
        (container) => {
            containerRef.current = container;
            window.particlesContainer = container;
        },
        [containerRef]
    );

    const options = useMemo(
        () => ({
            autoPlay: true,
            background: {
                color: {
                    value: "transparent"
                },
                opacity: 1
            },
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: ["grab", "attract"]
                    },
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: {
                        delay: 0.5,
                        enable: true
                    }
                },
                modes: {
                    grab: {
                        distance: 300,
                        links: {
                            opacity: 0 // Make the links transparent
                        }
                    },
                    attract: {
                        distance: 600,
                        duration: 0.4,
                        factor: 5
                    },
                    push: {
                        quantity: 6
                    }
                }
            },
            particles: {
                color: {
                    value: ["#F15D38", "#ffffff", "#541E91"], // White, Orange, Purple
                    animation: {
                        // h: {
                        //     enable: true,
                        //     speed: 10
                        // }
                    }
                },
                move: {
                    enable: true,
                    speed: 2,
                    outModes: {
                        default: "out",
                    }
                },
                number: {
                    density: {
                        enable: true,
                        width: 1920,
                        height: 1080
                    },
                    value: 50
                },
                opacity: {
                    value: {
                        min: 1,
                        max: 1
                    },
                    animation: {
                        enable: true,
                        speed: 0.5,
                        startValue: "max",
                    }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 5,
                        max: 50
                    },
                    animation: {
                        enable: true,
                        speed: 1,
                        startValue: "random"
                    }
                },
                links: {
                    enable: false // Disable the lines connecting particles
                }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true
        }),
        []
    );

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            )}
        </>
    );
};

export default ParticlesComponent;