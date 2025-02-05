"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import "./blogpost.css";

const blogPosts = [
  {
    slug: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity: Why It Matters More Than Ever",
    content: `
    <p>In today's fast-paced digital world, the question is no longer whether we should be concerned about cybersecurity—it’s how we can protect ourselves effectively. Cybersecurity has become a crucial concern for individuals, businesses, and, importantly, developers. But why? Why is cybersecurity such an essential field to dive into, and why should developers care about it?</p>
    <p>Imagine this: Your personal data, your online accounts, or even your company's sensitive information—it's all stored in the digital world. What if that data could be accessed by malicious actors in the blink of an eye? In a world where everything is connected, the threat of cyberattacks is always looming.</p>
    <p>But here’s the thing—cybersecurity is about more than just protecting your personal data. It's about ensuring the integrity, availability, and confidentiality of data across various platforms. For developers, understanding and integrating cybersecurity into their workflow is no longer optional; it’s a responsibility.</p>
    <p>So, what does this mean for developers? How does it impact their day-to-day work? And, most importantly, how can we stay ahead of potential threats in this ever-evolving digital landscape?</p>
    <p>Stay tuned for the next blog to learn more!</p>`,
},
  {
    slug: "how-to-secure-your-devices",
    title: "How to Secure Your Devices",
    content: `<p>Security is an important aspect...</p>`,
  },
];

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const router = useRouter();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);

  useEffect(() => {
    if (slug) {
      const currentPost = blogPosts[currentIndex];
      setPost(currentPost || null);
    }
  }, [slug]);

  if (!slug) return <div>Loading...</div>;
  if (!post) return <div>Post not found!</div>;

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${window.location.href}&text=${post.title}`, "_blank");
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "_blank");
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      router.push("/blogs");
    } else {
      router.push(`/blogs/${blogPosts[currentIndex - 1].slug}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < blogPosts.length - 1) {
      router.push(`/blogs/${blogPosts[currentIndex + 1].slug}`);
    } else {
      router.push("/blogs");
    }
  };

  return (
    <Container>
      <Row className="blog-container">
        <Col md={12}>
          <Card className="blog-card">
            <Card.Body>
              <Card.Title className="blog-title">{post.title}</Card.Title>
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="social-share-buttons">
                <Button className="share-button" variant="dark" onClick={shareOnTwitter}>
                  <FaTwitter /> Share on Twitter
                </Button>
                <Button className="share-button" variant="dark" onClick={shareOnFacebook}>
                  <FaFacebook /> Share on Facebook
                </Button>
              </div>

              {/* Navigation Buttons */}
              <div className="navigation-buttons mt-4">
                <Button variant="secondary" onClick={() => router.push("/")} className="me-2">
                  Back to Home
                </Button>

                <Button
                  variant="secondary"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="me-2"
                >
                  {currentIndex === 0 ? "Back to Blogs" : "← Previous"}
                </Button>

                <Button
                  variant="secondary"
                  onClick={handleNext}
                  disabled={currentIndex === blogPosts.length - 1}
                >
                  {currentIndex === blogPosts.length - 1 ? "Back to Blogs" : "Next →"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
