import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Survey1 from "../components/Survey1";

import InstructorLayout from "../components/InstructorLayout";
import GameNextStepButton from "../components/GameNextStepButton";

export default function InstructorSurvey1() {
  const router = useRouter();
  var isCurrentPage = router.query.currentIndex === "1";

  return (
    <InstructorLayout
      sessionID={router.query.sessionID}
      currentIndex={router.query.currentIndex}
      CurrentPage="Survey 1"
    >
      <Head>
        <title>Survey 1</title>
      </Head>
      <Survey1 user="Instructor"/>
      <div>
        {isCurrentPage ? (
          <GameNextStepButton
            sessionID={router.query.sessionID}
            PageLink="/instructorSurvey2"
            currentIndex="2"
          />
        ) : null}
      </div>
    </InstructorLayout>
  );
}
