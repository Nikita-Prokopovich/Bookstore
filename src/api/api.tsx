
export function getRandomRating(): number {
  return Math.floor(Math.random() * 5) + 1; 
}

export function renderStarRating(rating: number, className: string) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className={className}>&#9733;</span>);
    } else {
      stars.push(<span key={i} className={className}>&#9734;</span>);
    }
  }
  return stars;
}


