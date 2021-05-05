export const pageAnimation = {
     hidden: {
         opacity: 0,
         y: 300,
         
     },
     show: {
         opacity: 1,
         y: 0,
         transition: {
             duration: 1,
             when: 'beforeChildren',
             staggerChildren: 0.25, 
         }
     },
     exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1,
        }
     },
     
 }

export const titleAnime = {
    hidden: {
        opacity: 0,
        y:  100
    },
    show: {
        opacity: 1,
        y:  0,
        transition: {duration: 1}
    }
}

export const fade = {
    hidden: {opacity: 0},
    show: {opacity: 1,
        transition: {duration: 2}
    }
}

export const photoAnimate = {
    hidden: {scale: 1.5, opacity: 0},
    show: {scale: 1, opacity: 1}
}