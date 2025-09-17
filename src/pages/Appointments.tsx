import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, Plus } from "lucide-react";

const Appointments = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Appointment Corner</h1>
          <p className="text-xl text-muted-foreground">
            Manage your medical appointments with ease
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Book New Appointment */}
          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6">
            <div className="text-center">
              <div className="p-4 bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book New Appointment</h3>
              <p className="text-muted-foreground mb-6">
                Schedule your next medical consultation
              </p>
              <Button className="w-full">Book Appointment</Button>
            </div>
          </Card>
          
          {/* Upcoming Appointments */}
          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6">
            <div className="text-center">
              <div className="p-4 bg-success/10 text-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Upcoming Appointments</h3>
              <p className="text-muted-foreground mb-6">
                View your scheduled appointments
              </p>
              <Button variant="outline" className="w-full">View Schedule</Button>
            </div>
          </Card>
          
          {/* Appointment History */}
          <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 p-6">
            <div className="text-center">
              <div className="p-4 bg-accent/10 text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Appointment History</h3>
              <p className="text-muted-foreground mb-6">
                Review your past appointments
              </p>
              <Button variant="outline" className="w-full">View History</Button>
            </div>
          </Card>
        </div>
        
        {/* Recent Appointments */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Appointments</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gradient-card shadow-card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-full">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Dr. Sarah Johnson</h4>
                      <p className="text-muted-foreground">Cardiologist</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Jan 15, 2024</p>
                    <p className="text-muted-foreground">10:30 AM</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;