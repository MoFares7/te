import React from 'react'
import MDBox from '../../../../../../components/MDBox/MDBox'
import DashboardLayout from '../../../../../../examples/LayoutContainers/DashboardLayout'
import MDTypography from '../../../../../../components/MDTypography'
import { Divider , Grid} from '@mui/material'
import DashboardNavbar from '../../../../../../examples/Navbars/DashboardNavbar'
import PlatformSettings from '../../../../../profile/components/PlatformSettings'

const ManagerHomePage = () => {
        return (
                <DashboardLayout>
                        <DashboardNavbar />
                        <MDBox mb={2} />
                        <MDBox mt={5} mb={3}>
                                <Grid container spacing={1}>
                                        <Grid item xs={12} md={6} xl={4}>
                                                <PlatformSettings />
                                        </Grid>
                                        <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                                                <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />

                                                <Divider orientation="vertical" sx={{ mx: 0 }} />
                                        </Grid>

                                </Grid>
                        </MDBox>
                        <MDBox pt={2} px={2} lineHeight={1.25}>
                                <MDTypography variant="h6" fontWeight="medium">
                                        Projects
                                </MDTypography>
                                <MDBox mb={1}>
                                        <MDTypography variant="button" color="text">
                                                Architects design houses
                                        </MDTypography>
                                </MDBox>
                        </MDBox>
                        <MDBox p={2}>
                                <Grid container spacing={6}>
                                        <Grid item xs={12} md={6} xl={3}>

                                        </Grid>
                                        <Grid item xs={12} md={6} xl={3}>

                                        </Grid>
                                        <Grid item xs={12} md={6} xl={3}>

                                        </Grid>
                                        <Grid item xs={12} md={6} xl={3}>

                                        </Grid>
                                </Grid>
                        </MDBox>

                </DashboardLayout>
        )
}

export default ManagerHomePage
