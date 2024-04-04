import React, { useEffect, useState } from 'react'
import styles from "./MyCube.module.css"

export const MyCube = () => {
    let A = 0, B = 0, C = 0;
    const cubeWidths = [20, 10, 5];
    const width = 300, height = 70;
    const zBuffer = new Array(width * height).fill(0);
    const buffer = new Array(width * height).fill(' ');// Fill with space
    const distanceFromCam = 100;
    const K1 = 40;
    const incrementSpeed = 0.6;
    const [pre, setPre] = useState('')

    function calculateX(i, j, k) {
        return j * Math.sin(A) * Math.sin(B) * Math.cos(C) - k * Math.cos(A) * Math.sin(B) * Math.cos(C) +
            j * Math.cos(A) * Math.sin(C) + k * Math.sin(A) * Math.sin(C) + i * Math.cos(B) * Math.cos(C);
    }

    function calculateY(i, j, k) {
        return j * Math.cos(A) * Math.cos(C) + k * Math.sin(A) * Math.cos(C) -
            j * Math.sin(A) * Math.sin(B) * Math.sin(C) + k * Math.cos(A) * Math.sin(B) * Math.sin(C) -
            i * Math.cos(B) * Math.sin(C);
    }

    function calculateZ(i, j, k) {
        return k * Math.cos(A) * Math.cos(B) - j * Math.sin(A) * Math.cos(B) + i * Math.sin(B);
    }

    function calculateForSurface(cubeX, cubeY, cubeZ, ch) {
        const x = calculateX(cubeX, cubeY, cubeZ);
        const y = calculateY(cubeX, cubeY, cubeZ);
        const z = calculateZ(cubeX, cubeY, cubeZ) + distanceFromCam;

        const ooz = 1 / z;
        const xp = Math.floor(width / 2 + K1 * ooz * x * 2);
        const yp = Math.floor(height / 2 + K1 * ooz * y);

        const idx = xp + yp * width;
        if (idx >= 0 && idx < width * height) {
            if (ooz > zBuffer[idx]) {
                zBuffer[idx] = ooz;
                buffer[idx] = ch;
            }
        }
    }

    function draw() {
        buffer.fill(' ');
        zBuffer.fill(0);

        cubeWidths.forEach((cubeWidth, index) => {
            for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
                for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
                    calculateForSurface(cubeX, cubeY, -cubeWidth, '@');
                    calculateForSurface(cubeWidth, cubeY, cubeX, '$');
                    calculateForSurface(-cubeWidth, cubeY, -cubeX, '~');
                    calculateForSurface(-cubeWidth, cubeY, cubeWidth, '#');
                    calculateForSurface(cubeX, -cubeWidth, -cubeY, ';');
                    calculateForSurface(cubeX, cubeWidth, cubeY, '+');
                }
            }
        });

        const newpre = buffer.join('').replace(new RegExp(`(.{${width}})`, 'g'), '$1\n')
        setPre(newpre)
        //spinning
        A += 0.02;
        B += 0.02;
        C += 0.004;
    }

    useEffect(() => {
        setInterval(draw, 64)
    }, [])


    return <pre id='output' className={styles.pre}>{pre}</pre>
}
