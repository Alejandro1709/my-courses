import { Link } from "react-router";
import { BookMarked, Clock, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { ICourse } from "@/types/course.interface";
import { getStatus, getStatusColor } from "@/utils";

interface Props {
  course: ICourse;
}

function CourseCard({ course }: Props) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary">
      {/* Header Gradient */}
      <div className={`bg-linear-to-r ${course.color} h-24`} />

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1">
            {course.name} | {course.code}
          </h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            {course.professor}
          </p>
        </div>

        {/* Grade and Credits */}
        <div className="flex items-center justify-between py-2 border-y border-border">
          <div className="flex items-center gap-2">
            <BookMarked className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {course.credits} créditos
            </span>
          </div>
          <div
            className={`${getStatusColor(
              course.status
            )} text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {getStatus(course.status)}
          </div>
        </div>

        {/* Schedule and Room */}
        <div className="flex items-center justify-between py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {course.schedule}
            </span>
          </div>
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {course.room}
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-foreground">
              Progreso
            </span>
            <span className="text-xs text-primary font-semibold">
              {course.progress}%
            </span>
          </div>

          <Progress value={course.progress} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            className="flex-1 text-sm bg-transparent"
            asChild
          >
            <Link to={`/courses/${course.id}`}>Ver Detalles</Link>
          </Button>
          <Button className="flex-1 text-sm bg-primary hover:bg-primary/90">
            <TrendingUp className="w-4 h-4 mr-1" />
            Notas
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
