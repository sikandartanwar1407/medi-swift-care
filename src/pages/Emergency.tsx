import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Phone, MapPin, Clock, Ambulance, Heart } from "lucide-react";

const Emergency = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Emergency Header */}
        <div className="mb-8 text-center">
          <div className="p-4 bg-emergency/10 text-emergency rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold text-emergency mb-4">Emergency Services</h1>
          <p className="text-xl text-muted-foreground">
            Immediate medical assistance when you need it most
          </p>
        </div>
        
        {/* Emergency Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-emergency/5 to-emergency/10 border border-emergency/20 shadow-card hover:shadow-card-hover transition-all duration-300 p-8">
            <div className="text-center">
              <div className="p-6 bg-emergency text-emergency-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-emergency mb-4">Call Emergency</h3>
              <p className="text-muted-foreground mb-6">
                Get immediate medical assistance with our 24/7 emergency hotline
              </p>
              <Button 
                size="lg" 
                className="w-full bg-emergency hover:bg-emergency/90 text-emergency-foreground text-lg py-6"
              >
                Call 911
              </Button>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-emergency/5 to-emergency/10 border border-emergency/20 shadow-card hover:shadow-card-hover transition-all duration-300 p-8">
            <div className="text-center">
              <div className="p-6 bg-emergency text-emergency-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Ambulance className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-emergency mb-4">Request Ambulance</h3>
              <p className="text-muted-foreground mb-6">
                Fast ambulance service with GPS tracking and real-time updates
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-emergency text-emergency hover:bg-emergency hover:text-emergency-foreground text-lg py-6"
              >
                Request Now
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Nearest Hospital</h4>
              <p className="text-sm text-muted-foreground">Find the closest emergency room</p>
            </div>
          </Card>
          
          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Wait Times</h4>
              <p className="text-sm text-muted-foreground">Check current ER wait times</p>
            </div>
          </Card>
          
          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6">
            <div className="text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">First Aid</h4>
              <p className="text-sm text-muted-foreground">Emergency first aid guide</p>
            </div>
          </Card>
        </div>
        
        {/* Emergency Information */}
        <Card className="bg-gradient-card shadow-card p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">When to Call Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emergency">Life-Threatening Emergencies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Chest pain or heart attack symptoms</li>
                <li>• Difficulty breathing or choking</li>
                <li>• Severe bleeding or trauma</li>
                <li>• Loss of consciousness</li>
                <li>• Stroke symptoms</li>
                <li>• Severe allergic reactions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-success">Emergency Contacts</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emergency" />
                  <span className="font-medium">Emergency: 911</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-medium">DawaMitra Hotline: (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-success" />
                  <span className="font-medium">Poison Control: (800) 222-1222</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;