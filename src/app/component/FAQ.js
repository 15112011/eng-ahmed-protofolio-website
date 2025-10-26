"use client";
import { useState } from "react";
import { Box, Typography, Button, Collapse } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import { faqs } from "../data/content";

export default function FAQ() {
  const { language } = useLanguage();
  const faqList = faqs[language] || faqs.ar;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <Box component="section" sx={{ width: '100%', bgcolor: 'white', py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ maxWidth: '64rem', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        {/* Questions List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
          {faqList.map((faq) => {
            const isOpen = openFaq === faq.id;

            return (
              <Box
                key={faq.id}
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'grey.200',
                  pb: { xs: 1.5, sm: 2 },
                }}
              >
                {/* Question Button */}
                <Button
                  onClick={() => toggleFaq(faq.id)}
                  sx={{
                    width: '100%',
                    textAlign: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    py: 1,
                    '&:hover': { color: '#594534' },
                    transition: 'color 0.3s',
                    textTransform: 'none',
                    color: '#594534',
                  }}
                >
                  <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem' }, color: '#594534', fontWeight: 500, lineHeight: 1.6, flex: 1, textAlign: 'right' }}>
                    {faq.question}
                  </Typography>
                  
                  {/* Toggle Icon */}
                  <Box sx={{ flexShrink: 0 }}>
                    <Box
                      component="svg"
                      sx={{
                        width: { xs: 20, sm: 24 },
                        height: { xs: 20, sm: 24 },
                        color: '#594534',
                        transition: 'transform 0.3s',
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </Box>
                  </Box>
                </Button>

                {/* Answer */}
                <Collapse in={isOpen} timeout={500}>
                  <Box sx={{ mt: 1.5 }}>
                    <Typography sx={{ color: 'rgba(89, 69, 52, 0.7)', fontSize: { xs: '0.875rem', sm: '1rem' }, lineHeight: 1.6, pr: 1 }}>
                      {faq.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
