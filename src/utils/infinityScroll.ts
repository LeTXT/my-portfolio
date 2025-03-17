// const speed = .1;

// export const infinityScroll = (refLanguage: HTMLUListElement | null, set: React.Dispatch<React.SetStateAction<number>>) => {

//     if (!refLanguage) return

//     set((prev) => {

//         const ref = refLanguage?.current

//         if (!ref) return prev;

//         if (Math.abs(prev) >= ref.scrollWidth / 3) {
//           return 0;
//         }
//         return prev - speed;
//       });

//       requestAnimationFrame(infinityScroll(refLanguage, set));
//     };

// requestAnimationFrame(infinityScroll(refLanguage, set));