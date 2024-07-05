import React from 'react';
import Tile from '@/components/tabs/Tile'
import chemistryBooks from "@/data/12/chemistry/chemistryBooks.json"
import Link from 'next/link';

function ncertChapters() {
    const tileData = chemistryBooks.ncert;

    return (
        <div className="tile-container chapter-tiles">
            {tileData.map((tile) => (
                <Link href={`/12/chemistry/ncert/${tile.link}`} >
                    <Tile
                        key={tile.title}
                        image={tile.image}
                        title={tile.title}
                    />
                </Link>
            ))}

        </div>
    )
}

export default ncertChapters