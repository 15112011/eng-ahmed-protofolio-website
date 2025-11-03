"use client"
import { useState } from "react"
import { Box, Typography, Card, CardContent, Grid, Tabs, Tab, Chip, Divider } from "@mui/material"
import { journeyStages, reviews } from "../data/content"
import { projects as projectsAR } from "../data/projects"
import { projects as projectsEN } from "../data/projectsENG"

export default function TestDatabase() {
  const [activeTab, setActiveTab] = useState(0)
  const [language, setLanguage] = useState("ar")

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleLanguageToggle = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", p: 4 }}>
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: "#594534", mb: 2 }}>
            Fake Database Test Page
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
            Test and view all data from the local JSON/JS files
          </Typography>
          
          {/* Language Toggle */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
            <Chip 
              label="العربية" 
              onClick={handleLanguageToggle}
              color={language === "ar" ? "primary" : "default"}
              sx={{ cursor: "pointer" }}
            />
            <Chip 
              label="English" 
              onClick={handleLanguageToggle}
              color={language === "en" ? "primary" : "default"}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        {/* Tabs */}
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          centered
          sx={{ mb: 4, bgcolor: "white", borderRadius: 2 }}
        >
          <Tab label="Journey Stages" />
          <Tab label="Reviews" />
          <Tab label="Projects" />
        </Tabs>

        {/* Journey Stages Tab */}
        {activeTab === 0 && (
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Journey Stages ({language === "ar" ? "Arabic" : "English"})
            </Typography>
            <Grid container spacing={3}>
              {journeyStages[language].map((stage) => (
                <Grid item xs={12} md={6} lg={4} key={stage.id}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent>
                      <Chip 
                        label={`ID: ${stage.id}`} 
                        size="small" 
                        sx={{ mb: 2 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {stage.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#594534", mb: 2 }}>
                        {stage.subtitle}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {stage.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Reviews Tab */}
        {activeTab === 1 && (
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Reviews ({language === "ar" ? "Arabic" : "English"})
            </Typography>
            <Grid container spacing={3}>
              {reviews[language].map((review) => (
                <Grid item xs={12} md={6} key={review.id}>
                  <Card sx={{ boxShadow: 3 }}>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <Chip 
                          label={`ID: ${review.id}`} 
                          size="small" 
                        />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {review.name}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body1" sx={{ color: "#666", fontStyle: "italic" }}>
                        &ldquo;{review.text}&rdquo;
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Projects Tab */}
        {activeTab === 2 && (
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Projects ({language === "ar" ? "Arabic" : "English"})
            </Typography>
            <Grid container spacing={3}>
              {(language === "ar" ? projectsAR : projectsEN).map((project) => (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <Box
                      component="img"
                      src={project.mainImage}
                      alt={project.name}
                      sx={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                        <Chip 
                          label={`ID: ${project.id}`} 
                          size="small" 
                        />
                        <Chip 
                          label={project.category} 
                          size="small" 
                          color="primary"
                        />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="caption" sx={{ color: "#888" }}>
                          📍 {project.location}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#888" }}>
                          📅 {project.date}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#888" }}>
                          ⚙️ {project.status}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#888" }}>
                          🖼️ {project.images.length} images
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Data Summary */}
        <Box sx={{ mt: 6, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            📊 Database Summary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ bgcolor: "#f0f0f0" }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: "#594534" }}>
                    {journeyStages.ar.length}
                  </Typography>
                  <Typography variant="body2">Journey Stages</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ bgcolor: "#f0f0f0" }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: "#594534" }}>
                    {reviews.ar.length}
                  </Typography>
                  <Typography variant="body2">Reviews</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ bgcolor: "#f0f0f0" }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: "#594534" }}>
                    {projectsAR.length}
                  </Typography>
                  <Typography variant="body2">Projects</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
