import React from 'react'
import ProceedingsContent from './Content'

export const metadata = {
    title: 'Proceedings ICTMR  | Published Research Papers',
    description: 'Browse published conference proceedings from ICETMR, featuring cutting-edge research and scholarly contributions.',
}

function ProceedingsPage() {
    return (
        <main>
            <ProceedingsContent />
        </main>
    )
}

export default ProceedingsPage