import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Pill } from "lucide-react";
import pmjapImage from "@/assets/pmjap-partnership.jpg";

export function PartnershipSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-success/5 to-success/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-success/10 text-success hover:bg-success/20 mb-4 text-sm px-4 py-2">
              Government Partnership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proud Partner of PM-JAP
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In collaboration with Pradhan Mantri Bharatiya Janaushadhi Pariyojana, 
              we provide affordable, quality generic medicines to every Indian citizen.
            </p>
          </div>
          
          {/* Partnership Card */}
          <Card className="bg-background-alt shadow-hero border-0 overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={pmjapImage} 
                  alt="PM-JAP Partnership" 
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-success/20 to-transparent" />
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-success mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Official PM-JAP Partner
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Through our partnership with the Government of India&apos;s PM-JAP initiative, 
                  DawaMitra ensures access to high-quality generic medicines at up to
                  <span className="font-semibold text-success"> 50-90% lower costs</span> 
                  compared to branded alternatives.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Assured</h4>
                      <p className="text-muted-foreground">WHO-GMP certified generic medicines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Affordable Pricing</h4>
                      <p className="text-muted-foreground">Up to 90% savings on medicine costs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Wide Coverage</h4>
                      <p className="text-muted-foreground">1000+ generic medicines available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background-alt shadow-card text-center p-8">
              <div className="p-4 bg-success/10 text-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Pill className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
              <div className="text-muted-foreground">Generic Medicines</div>
            </Card>
            
            <Card className="bg-background-alt shadow-card text-center p-8">
              <div className="p-4 bg-success/10 text-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10M+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </Card>
            
            <Card className="bg-background-alt shadow-card text-center p-8">
              <div className="p-4 bg-success/10 text-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">90%</div>
              <div className="text-muted-foreground">Cost Savings</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}