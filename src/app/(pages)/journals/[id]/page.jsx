import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getJournalById } from "@/lib/pocketbase"
import { ArrowLeft } from "lucide-react"
import PaperSubmissionForm from "./components/Form"

export const dynamic = "force-dynamic"

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  try {
    const resolvedParams = await params
    const journal = await getJournalById(resolvedParams.id)
    
    if (!journal) {
      return {
        title: "Journal Not Found | RobotechSummit",
        description: "The requested journal could not be found.",
      }
    }

    const journalTitle = journal.title || "Untitled Journal"
    const journalDescription = journal.description || `Submit your research paper to ${journalTitle}. Explore publication opportunities and submission guidelines for this academic journal.`
    
    // Generate image URL if available
    const journalImageUrl = journal.imgs 
      ? `https://zep-research.pockethost.io/api/files/Journals/${journal.id}/${journal.imgs}`
      : journal.img || "https://robotechsummit.com/opengraph.png"

    const pageUrl = `https://robotechsummit.com/journals/${resolvedParams.id}`

    return {
      title: `${journalTitle} | RobotechSummit Journal Publications`,
      description: journalDescription,
      keywords: [
        journalTitle.toLowerCase(),
        "research journal",
        "academic publication",
        "RobotechSummit 2025",
        "AI research",
        "robotics journal",
        "paper submission",
        "peer review",
        ...(journal.issncode ? [`ISSN ${journal.issncode}`] : [])
      ].join(", "), // Convert array to comma-separated string

      // Open Graph / Facebook
      openGraph: {
        type: "website",
        url: pageUrl,
        title: `${journalTitle} | RobotechSummit Journal Publications`,
        description: journalDescription,
        siteName: "RobotechSummit",
        images: [
          {
            url: journalImageUrl,
            width: 1200,
            height: 630,
            alt: `${journalTitle} - Research Journal`,
          },
        ],
        locale: "en_US",
      },

      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: `${journalTitle} | RobotechSummit Journal Publications`,
        description: journalDescription,
        images: [journalImageUrl],
        creator: "@robotechsummit",
      },

      // Canonical URL
      alternates: {
        canonical: pageUrl,
      },

      // Additional metadata for better SEO
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },

      // Verification and additional meta tags
      verification: {
        google: process.env.GOOGLE_VERIFICATION_CODE,
      },

      // Category for better organization
      category: "Research Journal",
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Journal | RobotechSummit",
      description: "Explore journal publication opportunities with RobotechSummit.",
    }
  }
}

export default async function JournalDetailPage({ params }) {
  const resolvedParams = await params
  const journal = await getJournalById(resolvedParams.id)

  if (!journal) {
    notFound()
  }

  // Structured Data JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${journal.title || "Untitled Journal"} | RobotechSummit Journal Publications`,
    "description": journal.description || `Submit your research paper to ${journal.title || "Untitled Journal"}. Explore publication opportunities and submission guidelines for this academic journal.`,
    "url": `https://robotechsummit.com/journals/${resolvedParams.id}`,
    "mainEntity": {
      "@type": "Periodical",
      "name": journal.title || "Untitled Journal",
      "description": journal.description || `Academic journal for research publication`,
      "url": `https://robotechsummit.com/journals/${resolvedParams.id}`,
      ...(journal.issncode && { "issn": journal.issncode }),
      "publisher": {
        "@type": "Organization",
        "name": "RobotechSummit",
        "url": "https://robotechsummit.com"
      },
      ...(journal.created && {
        "dateCreated": journal.created,
      }),
      ...(journal.updated && {
        "dateModified": journal.updated,
      })
    },
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <div className="container mx-auto py-12">
        <Link href="/journals">
          <Button variant="ghost" className="mb-8 group hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Journals
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Journal Details - Left Side */}
          <div className="space-y-8">
            <header>
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {journal.title || "Untitled Journal"}
              </h1>
            </header>

            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-md">
              {journal.imgs ? (
                <Image
                  src={`https://zep-research.pockethost.io/api/files/Journals/${journal.id}/${journal.imgs}`}
                  alt={`${journal.title || "Journal"} cover image`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : journal.img ? (
                <Image
                  src={journal.img}
                  alt={`${journal.title || "Journal"} cover image`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>

            {journal.description && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="px-4 py-2 bg-gray-50 rounded-md text-gray-700">
                  {journal.description}
                </p>
              </div>
            )}

            {journal.issncode && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">ISSN Code</h2>
                <p className="px-4 py-2 bg-gray-50 rounded-md font-mono text-gray-700">
                  {journal.issncode}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              {/* Commented out creation/update dates as in original */}
              {/* <div>
                <h2 className="text-lg font-semibold mb-2">Created</h2>
                <p className="px-4 py-2 bg-gray-50 rounded-md text-gray-700">
                  {new Date(journal.created).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Last Updated</h2>
                <p className="px-4 py-2 bg-gray-50 rounded-md text-gray-700">
                  {new Date(journal.updated).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div> */}
            </div>
          </div>

          {/* Submission Form - Right Side */}
          <aside>
            <PaperSubmissionForm 
              journalId={journal.id} 
              journalTitle={journal.title || "Untitled Journal"} 
            />
          </aside>
        </div>
      </div>
    </>
  )
}